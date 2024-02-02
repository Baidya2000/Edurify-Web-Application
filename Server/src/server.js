const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const database = require("./utils/database.js");
const User = require("./models/user");

const userRouter = require("./routes/user.js");

const app = express();
app.use(express.json())
app.use(cors());

// Routes here

app.use(userRouter);

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
