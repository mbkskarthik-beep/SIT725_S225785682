const mongoose = require("mongoose");

const User = require("./models/user");

const User = require("./user");


mongoose.connect("mongodb://localhost:27017/myprojectDB");

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB for seeding!");
});

const sampleUser = new User({
  username: "jack",
  email: "mbkskarthik@gmail.com",
  age: 28,
  isActive: true,
  isVerified: false,
  role: "member"
});

sampleUser
  .save()
  .then(() => {
    console.log("Sample user saved!");
    mongoose.connection.close();
  })
  .finally(() => {
    mongoose.connection.close();
  });

