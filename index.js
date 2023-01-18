const express = require("express");
const app = express();

app.use(express.json({ limit: "100mb" }));

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(8000, () => console.log("connected"));
