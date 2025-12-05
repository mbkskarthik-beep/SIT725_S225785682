const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    age: Number,
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: false },
    role: { type: String, default: "user" }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
