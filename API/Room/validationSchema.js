const yup = require("yup");

const createRoomSchema = yup.object({
  body: yup.object({
    name: yup.string().required("Name is missing"),
    serialNo: yup.string().required("Serial No is missing"),
    description: yup.string().required("Description is required"),
    color: yup.string().required("color is required"),
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

module.exports = { createRoomSchema };
