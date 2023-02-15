const { PrismaClient } = require("@prisma/client");
const R = require("ramda");
const { v4: uuidv4 } = require("uuid");
const prisma = new PrismaClient();

module.exports = class TrnsactionService {
  constructor() {}
  /**
   *create a transaction
   * @param {*} request
   * @returns
   */
  async createTransaction(request) {
    const users = request.users;
    request.id = uuidv4();
    delete request.users;
    const benificiaryMap = (x) => {
      return {
        id: uuidv4(),
        userId: x.id,
        amount: request.totalAmount / users.length,
      };
    };
    const requestBody = R.map(benificiaryMap, users);
    const transactiondetails = await prisma.Transactions.create({
      data: {
        ...request,
        transactionBenificiaries: {
          create: requestBody,
        },
      },
      include: {
        transactionBenificiaries: true,
      },
    });

    return transactiondetails;
  }
  /**
   * Get the details then group by doneBY column and get the total amount
   * @param {*} request
   * @returns
   */
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

    const result = R.pipe(
      R.groupBy((u) => u.doneBy),
      R.map((v) =>
        R.reduce(
          (acc, item) => acc + item.transactionBenificiaries[0].amount,
          0,
          v
        )
      )
    )(alltransactiondetails);

    return result;
  }
};
