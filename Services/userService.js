const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

module.exports = class Userservice {
  constructor() {}
  /**
   *
   * @param {*} request
   * @returns
   */
  async createUser(request) {
    const hashSalt = bcrypt.genSaltSync(10);
    const hashedpassword = bcrypt.hashSync(request.password, hashSalt);
    request.id = uuidv4();
    request.salt = hashSalt;
    request.password = hashedpassword;
    request.dob = new Date(request.dob);
    const user = await prisma.user.create({
      data: request,
    });

    return user;
  }
};
