const express = require("express");
const router = express.Router();

var messages = ["hola", "test"];

router.get("/chat/test", function(req, res, next) {
  res.send("test chat");
});

router.get("/chat/list", function(req, res, next) {
  var s = "";
  
  for(var message of messages) {
     s += message + "<br><br>"; 
  }
  
  res.send(s);
});

router.post("/chat/message", function(req, res, next) {
  var body = req.body;
  messages.push(body.message);
  res.send();
});


module.exports = router;