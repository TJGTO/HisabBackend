const express = require("express");
const router = express.Router();
const { createUserSchema } = require("./validatorSchema");
const { validateCreateUser } = require("./validatorMiddleWare");
router.post(
  "/createUser",
  validateCreateUser(createUserSchema),
  require("./createUser")
);

module.exports = router;
