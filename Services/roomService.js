const { PrismaClient } = require("@prisma/client");
const R = require("ramda");
const { v4: uuidv4 } = require("uuid");
const prisma = new PrismaClient();

module.exports = class RoomService {
  constructor() {}
  /**
   *create a user
   * @param {*} request
   * @returns
   */
  async createRoom(request) {
    const users = request.users;
    request.id = uuidv4();
    delete request.users;
    const roomUserMap = (x) => {
      return {
        userId: x.id,
      };
    };
    const requestBody = R.map(roomUserMap, users);
    const roomDetails = await prisma.Room.create({
      data: {
        ...request,
        users: {
          create: requestBody,
        },
      },
      include: {
        users: true,
      },
    });
    return roomDetails;
  }
};
