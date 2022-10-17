var output;

function getOutput() {
  output = output || document.querySelector("#output");
  return output;
}

function clearOutput() {
   getOutput().innerHTML = "";
}

function test_js() {
  fetch("endpoint/test-js")
    .then(function(response) {
      response.text()
        .then(function(text) {
          getOutput().innerHTML = text;
        });
    });
}

function test_py() {
  fetch("endpoint/test-py")
    .then(function(response) {
      response.text()
        .then(function(text) {
          getOutput().innerHTML = text;
        });
    });
}

function test_c() {
  fetch("endpoint/test-c")
    .then(function(response) {
      response.text()
        .then(function(text) {
          getOutput().innerHTML = text;
        });
    });
}


function test_sql() {
  fetch("endpoint/test-sql")
    .then(function(response) {
      response.text()
        .then(function(text) {
          getOutput().innerHTML = text;
        });
    });
}