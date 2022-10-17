
const express = require("express");
const router = express.Router();
var exec = require("child_process").exec;

function execute(command, callback) {
  exec(command, function(error, stdout, stderr){
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

module.exports = router;