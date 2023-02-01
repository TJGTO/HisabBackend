const express = require("express");
const globalErrorHandler = require("./utils/middlewares/globalErrorHandler");
const app = express();

app.use(express.json({ limit: "100mb" }));

app.use(require("./API"));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.use(globalErrorHandler);

app.listen(8000, () => console.log("connected"));
