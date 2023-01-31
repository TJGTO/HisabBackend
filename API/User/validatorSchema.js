const yup = require("yup");

const createUserSchema = yup.object({
  body: yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email("Please send a valid email id").required(),
    dob: yup.date().required(),
  }),
});

module.exports = { createUserSchema };
