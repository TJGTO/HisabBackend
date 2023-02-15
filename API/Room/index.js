const express = require("express");
const router = express.Router();
const tokenVerification = require("../../utils/middlewares/tokenVerification");
const requestValidator = require("../../utils/middlewares/requestValidator");
const { createRoomSchema } = require("./validationSchema");

router.post(
  "/createRoom",
  tokenVerification,
  requestValidator(createRoomSchema),
  require("./createRoom")
);

module.exports = router;
