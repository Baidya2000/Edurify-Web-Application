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
  console.log(req.body.form, req.body.id);

  result = User.updateOne(
    { _id: req.body.id },
    { $push: { formData: req.body.form } }
  );

  console.log(result);

  res.status(200).send("Baler Form");
};

module.exports = { signup, login, addForm };
