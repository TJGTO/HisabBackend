const yup = require("yup");

const createTransactionSchema = yup.object({
  body: yup.object({
    description: yup.string().required("Description is missing"),
    roomId: yup.string().required("Room is missing"),
    doneBy: yup.string().required("Done By is required"),
    totalAmount: yup
      .number()
      .required("Please enter the amount")
      .min(1, "Please send amount greater than zero"),
    users: yup
      .array()
      .of(
        yup.object({
          id: yup.string().required("User id is missing"),
        })
      )
      .min(1, "Please send atleast one user")
      .required("Users are required"),
  }),
});

const getDetailsByDateRangeSchema = yup.object({
  body: yup.object({
    roomId: yup.string().required("Room is missing"),
    users: yup
      .array()
      .min(1, "Please send atleast one user")
      .required("Users are required"),
    fromDate: yup.date().required("Please send the from date"),
    toDate: yup.date().required("Please send the to date"),
  }),
});

module.exports = { createTransactionSchema, getDetailsByDateRangeSchema };
