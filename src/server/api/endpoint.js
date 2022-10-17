
const express = require("express");
const router = express.Router();
const exec = require("child_process").exec;
const db_sql = require("../logic/db-sql");

function execute(command, callback) {
  exec(command, function(error, stdout, stderr) {
    callback(stdout);
  });
}

// define the home page route
router.get("/endpoint/test-js", function(req, res) {
  res.send(require("../lib/test.js")(10));
});

router.get("/endpoint/test-py", function(req, res) {
  execute("python src/server/lib/test.py 10", function(output) {
    res.send(output);
  });
});

router.get("/endpoint/test-c", function(req, res) {
  execute("./src/server/lib/test 10", function(output) {
    res.send(output);
  });
});

router.get("/endpoint/test-sql", function(req, res) {
  db_sql.validateUser("guest", "guest", function(text) {
    res.send(text);
  });
});

module.exports = router;