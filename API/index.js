const express = require("express");
const router = express.Router();

router.use("/user", require("./User"));
router.use("/room", require("./Room"));
router.use("/transaction", require("./Transaction"));

module.exports = router;
