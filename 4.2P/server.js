const express = require("express");
const mongoose = require("mongoose");
const User = require("./public/user")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


mongoose.connect("mongodb://localhost:27017/myprojectDB");
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});


app.get("/api/users", async (req, res) => {
  const users = await User.find({});
  res.json({ statusCode: 200, data: users, message: "Success" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = User;
