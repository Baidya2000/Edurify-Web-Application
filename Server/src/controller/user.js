const database = require("../utils/database.js");
const User = require("../models/user");

const signup = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    user.save();
    res.send("Sign up Successfull.");
  } catch (error) {
    console.log(error);
    res.send("unknown error!");
  }
};

const login = async (req, res) => {
  res.send("Bulti Login!!!");
};

module.exports = { signup, login };
