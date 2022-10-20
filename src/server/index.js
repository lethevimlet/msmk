const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cookieParser = require("cookie-parser");
const io = require("socket.io")(server);

// Middleware para servir archivos estaticos
app.use(express.static("src/webapp"));

// Middleware para convertir JSON en objetos de JS y manipular cookies
app.use(express.json());
app.use(cookieParser());

// Nuestra API
app.use(require("./api/endpoint"));
app.use(require("./api/chat-endpoint"));


app.get("/test", function(req, res) {
  res.redirect("https://google.com");
});

io.on("connection", (socket) => {
  console.log("WS -> User connected id: " + socket.id);
});

server.listen(3000);