const express = require("express");
const userController = require("../controller/user");

const userRouter = express.Router();

userRouter.post("/sign-up", userController.signup);

userRouter.post("/login", userController.login);

module.exports = userRouter;
