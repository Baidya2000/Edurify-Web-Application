const database = require("../utils/database.js");
const User = require("../models/user");
const Form = require("../models/form");

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
  try {
    // Find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(200).send({ status: "Email doesnt exxist" });
    }

    // Check password
    if (user.password !== req.body.password) {
      return res.status(200).send({ status: "Incorrect Passowrd" });
    }

    // Create and assign a token
    // const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    // res.header('auth-token', token).send(token);
    console.log(user);
    res.status(200).send({ status: "success", id: user._id });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

const addForm = async (req, res) => {
  try {
    const form = new Form({
      userId: req.body.id,
      name: req.body.form.name,
      colour: req.body.form.colour,
      border: req.body.form.border,
      questions: req.body.form.questions,
    });
    form.save();
    res.status(200).send("saved");
  } catch (error) {
    console.log(error);
    res.status(200).send("error");
  }
};

const getForm = async (req, res) => {
  try {
    const form = new Form({
      userId: req.body.id,
      name: req.body.form.name,
      colour: req.body.form.colour,
      border: req.body.form.border,
      questions: req.body.form.questions,
    });
    form.save();
    res.status(200).send("saved");
  } catch (error) {
    console.log(error);
    res.status(200).send("error");
  }
};

module.exports = { signup, login, addForm, getForm };
