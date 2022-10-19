const express = require("express");
const app = express();
const endpoint = require("./api/endpoint");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static("src/webapp"));
app.use(express.json());
app.use(endpoint);
app.use(require("./api/chat-endpoint"));


app.get("/test", function(req, res) {
  res.redirect("https://google.com");
});

io.on("connection", (socket) => {
  console.log("WS -> User connected id: " + socket.id);
});

server.listen(3000);