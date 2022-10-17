const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/db/app.db");

module.exports.validateUser = function(username, password, cb) {
  db.serialize(function() {
    var text = "";

    db.each("SELECT id, username, password FROM Users", function(err, row) {
      text += row.id + " " + row.username + " " + row.password + "<br>";
    }, function(err, done) {
      cb(text);
    });
  });
};