const express = require("express");
const router = express.Router();
var db_nosql = require("../logic/db-nosql");
var db_sql = require("../logic/db-sql");

function getDate() {
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + " " + time;
  return "<span class=\"date\">" + dateTime + "</span>";
}

router.get("/chat/test", function(req, res, next) {
  res.send("test chat");
});

router.get("/chat/list", function(req, res, next) {
  if (req.cookies.auth) {
    var auth = req.cookies.auth.split(":");
    db_sql.validateUser(auth[0], auth[1], function(valid) {
      if (valid) {
        var s = "";

        for (var message of db_nosql.read().messages) {
          s += message + "<br>";
        }

        res.send(s);
      } else {
        res.send("unauthorized!");
      }
    });
  } else {
    res.send("unauthorized!");
  }
});

router.post("/chat/message", function(req, res, next) {
  if (req.cookies.auth) {
    var auth = req.cookies.auth.split(":");
    db_sql.validateUser(auth[0], auth[1], function(valid) {
      if (valid) {
        var data = db_nosql.read();
        data.messages.push("<span class=\"username\">" + auth[0] + ":</span> " + req.body.message + "<br>" + getDate());
        db_nosql.write(data);
        res.send();
      } else {
        res.send("unauthorized!");
      }
    });
  } else {
    res.send("unauthorized!");
  }
});

router.post("/chat/login", function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;

  db_sql.validateUser(username, password, function(valid) {
    if (valid) {
      res.cookie("auth", username + ":" + password, { maxAge: 900000, httpOnly: false });
    }
    res.send(valid);
  })
});

module.exports = router;