const { PrismaClient } = require("@prisma/client");
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
    const roomDetails = await prisma.Room.create({
      data: request,
    });
    let requestBody = [];
    users.forEach((element) => {
      let Obj = {
        userId: element.id,
        roomId: roomDetails.id,
      };
      requestBody.push(Obj);
    });
    const mappedUsers = await prisma.RoomUserMap.createMany({
      data: requestBody,
      skipDuplicates: true,
    });
    roomDetails.mappedUsers = mappedUsers;
    return roomDetails;
  }
};
