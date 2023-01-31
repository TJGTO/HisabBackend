const catchAsync = require("../../utils/catchAsync");
const validateCreateUser = (schema) =>
  catchAsync(async (req, res, next) => {
    await schema.validate({
      body: req.body,
    });
    return next();
  });

module.exports = { validateCreateUser };
