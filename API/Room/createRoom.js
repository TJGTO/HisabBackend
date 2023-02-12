const RoomService = require("../../Services/roomService");
const catchAsync = require("../../utils/catchAsync");
const responseHandler = require("../../utils/responseHandler");

module.exports = catchAsync(async (req, res, next) => {
  let payload = await new RoomService().createRoom(req.body);
  responseHandler(true, payload, res);
});
