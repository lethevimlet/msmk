//CRUD
var fs = require("fs");
var path = require("path");

module.exports.read = function() {
  return require("../../db/db.json");
};

module.exports.write = function(db) {
  fs.writeFileSync(path.join(__dirname, "../../db/db.json"), JSON.stringify(db, null, 2));
};