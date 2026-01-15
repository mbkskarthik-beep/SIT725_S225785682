const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

let attendanceCount = 0;


app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A student connected");

  socket.emit("attendanceUpdate", attendanceCount);

  
  socket.on("checkIn", () => {
    attendanceCount++;
    io.emit("attendanceUpdate", attendanceCount);
  });

  socket.on("disconnect", () => {
    console.log("A student disconnected");
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
