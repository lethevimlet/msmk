module.exports = function(count) {
  var s = "I'am JS<br><br>";
  s += "Count: " + count + "<br><br>";

  for (var i = 0; i < count; i++) {
    s += i + "<br>";
  }

  return s;
};