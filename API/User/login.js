const userService = require("../../Services/userService");
const catchAsync = require("../../utils/catchAsync");
const responseHandler = require("../../utils/responseHandler");

module.exports = catchAsync(async (req, res, next) => {
  let payload = await new userService().login(req.body);
  responseHandler(true, payload, res, "Successfully Logged In");
});
