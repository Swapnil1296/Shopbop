const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, required: false},
    dateOfBirth: {type: String, required: false},
    type: {type: String, required: false},
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
