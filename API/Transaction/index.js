const express = require("express");
const router = express.Router();
const requestValidator = require("../../utils/middlewares/requestValidator");
// const { createUserSchema, loginSchema } = require("./validationSchema");

router.post("/createTransaction", require("./createTransaction"));

router.post("/comparison", require("./comparison"));

module.exports = router;
