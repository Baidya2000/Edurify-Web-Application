const express = require("express");
const cors = require("cors");

const db = require("./utils/database.js");

const userRouter = require("./routes/user.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Routes here
app.use(userRouter);

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB database");
  app.listen(8080, () => {
    console.log("Server is running on port 8080");
  });
});
