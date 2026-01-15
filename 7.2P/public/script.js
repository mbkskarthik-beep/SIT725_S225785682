const socket = io();

const countElement = document.getElementById("count");
const button = document.getElementById("checkInBtn");


socket.on("attendanceUpdate", (count) => {
  countElement.innerText = count;
});


button.addEventListener("click", () => {
  socket.emit("checkIn");
});
