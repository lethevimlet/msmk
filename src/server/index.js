const express = require("express");
const app = express();
const endpoint = require("./api/endpoint");

app.use(express.static("src/webapp"));
app.use(endpoint);


app.get("/test", function (req, res) {
  res.send("This is a test!");
});

app.listen(3000);