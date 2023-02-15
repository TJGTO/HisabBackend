const express = require("express");
const router = express.Router();
const tokenVerification = require("../../utils/middlewares/tokenVerification");
const requestValidator = require("../../utils/middlewares/requestValidator");
const { createTransactionSchema } = require("./validationSchema");

router.post(
  "/createTransaction",
  tokenVerification,
  requestValidator(createTransactionSchema),
  require("./createTransaction")
);

router.post("/comparison", tokenVerification, require("./comparison"));

module.exports = router;
