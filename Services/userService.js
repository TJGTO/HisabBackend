const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

module.exports = class Userservice {
  constructor() {}

  async createUser(request) {
    const user = await prisma.user.create({
      data: {
        id: "ksehf89789sg789",
        firstName: "Elon",
        lastName: "Mask",
        email: "Elon.Mask@gmail.com",
        profilePicture: "",
        hash: "",
        password: "",
        dob: new Date(),
        deleted: "N",
      },
    });

    return user;
  }
};
