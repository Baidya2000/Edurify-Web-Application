// user.js

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  formData : [{}]
});

module.exports = mongoose.model("User", userSchema);
