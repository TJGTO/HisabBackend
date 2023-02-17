const TransactionService = require("../../Services/transactionService");
const catchAsync = require("../../utils/catchAsync");
const responseHandler = require("../../utils/responseHandler");

module.exports = catchAsync(async (req, res, next) => {
  let payload = await new TransactionService().transactionofUsersByDate(
    req.body
  );
  responseHandler(true, payload, res);
});
