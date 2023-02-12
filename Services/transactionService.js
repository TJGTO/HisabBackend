const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const prisma = new PrismaClient();

module.exports = class TrnsactionService {
  constructor() {}
  /**
   *create a user
   * @param {*} request
   * @returns
   */
  async createTransaction(request) {
    const users = request.users;
    request.id = uuidv4();
    delete request.users;
    const transactiondetails = await prisma.Transactions.create({
      data: request,
    });
    let requestBody = [];
    users.forEach((element) => {
      let Obj = {
        id: uuidv4(),
        userId: element.id,
        amount: request.totalAmount / users.length,
        trnsactionId: transactiondetails.id,
      };
      requestBody.push(Obj);
    });
    const mappedBenificiaries = await prisma.TBenificiaries.createMany({
      data: requestBody,
      skipDuplicates: true,
    });
    transactiondetails.mappedBenificiaries = mappedBenificiaries;
    return transactiondetails;
  }

  async transactionComparisonWithOne(request) {
    const alltransactiondetails = await prisma.Transactions.findMany({
      where: {
        AND: {
          doneBy: {
            in: request.users,
          },
          roomId: request.roomId,
        },
      },
      include: {
        transactionBenificiaries: true,
      },
    });
    let result = [];
    request.users.forEach((element) => {
      let Obj = {};
      Obj.user = element;
      let arr = alltransactiondetails.filter((x) => x.doneBy == element);
      let total = arr.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.transactionBenificiaries[0].amount,
        0
      );
      Obj.spend = total;
      result.push(Obj);
    });
    return result;
  }
};
