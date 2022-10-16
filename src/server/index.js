const express = require("express");
const app = express();

app.use(express.static("src/app"));

app.get("/test", function (req, res) {
  res.send("This is a test!");
});

app.listen(3000);