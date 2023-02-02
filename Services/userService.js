const { PrismaClient } = require("@prisma/client");
var jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

module.exports = class Userservice {
  constructor() {}
  /**
   *create a user
   * @param {*} request
   * @returns
   */
  async createUser(request) {
    const user = await this.findUserByEmail(request.email);
    if (user) {
      throw new Error("User is already present");
    }
    const hashSalt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(request.password, hashSalt);
    request.id = uuidv4();
    request.salt = hashSalt;
    request.password = hashedpassword;
    request.dob = new Date(request.dob);
    const userDetails = await prisma.user.create({
      data: request,
    });

    return userDetails;
  }
  /**
   * check user password and id to login
   * @param {*} request
   */
  async login(request) {
    const user = await this.findUserByEmail(request.email);
    if (!user) {
      throw new Error("Not find the user");
    }

    const response = await bcrypt
      .compare(request.password, user.password)
      .then((res) => res)
      .catch((err) => false);

    if (response) {
      const token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_KEY);
      return { token };
    } else {
      throw new Error("Wrong username or password");
    }
  }
  /**
   *@param {*} email
   */
  async findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }
};
