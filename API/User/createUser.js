const userService = require("../../Services/userService");
const catchAsync = require("../../utils/catchAsync");

module.exports = catchAsync(async (req, res, next) => {
  let payload = await new userService().createUser(req.body);
  res.status(200).send(payload);
});
