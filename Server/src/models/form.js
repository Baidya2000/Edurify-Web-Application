// form.js

const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  userId: "String",
  name: "String",
  colour: "String",
  border: "String",
  questions: [{ question: "String", inputType: "String" }],
});

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
