const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// this line lets Express serve index.html from /public
app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("message", (data) => {
    io.emit("message", data);
  });
});

server.listen(3000, () => {
  console.log("Chat running on port 3000");

});
