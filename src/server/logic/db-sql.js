const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./src/db/app.db");

module.exports.validateUser = function(username, password, cb) {
  db.serialize(function() {
    var valid = false;

    db.each("SELECT id, username, password FROM Users WHERE username=\"" + username + "\" AND password=\"" + password + "\"", function(err, row) {
      //text +=  + " " + row.username + " " + row.password + "<br>";    
      if (row.id >= 0) {
        valid = true;
      }
    }, function(err, done) {
      //console.log(err);
      cb(valid);
    });

  });
};