const express = require("express");
const router = express.Router();
const requestValidator = require("../../utils/middlewares/requestValidator");
const { createUserSchema, loginSchema } = require("./validationSchema");

router.post(
  "/createUser",
  requestValidator(createUserSchema),
  require("./createUser")
);

router.post("/login", requestValidator(loginSchema), require("./login"));

module.exports = router;
