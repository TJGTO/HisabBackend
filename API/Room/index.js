const express = require("express");
const router = express.Router();
const requestValidator = require("../../utils/middlewares/requestValidator");
// const { createUserSchema, loginSchema } = require("./validationSchema");

router.post("/createRoom", require("./createRoom"));

module.exports = router;
