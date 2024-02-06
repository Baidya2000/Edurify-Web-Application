const express = require("express");
const userController = require("../controller/user");

const userRouter = express.Router();

userRouter.post("/sign-up", userController.signup);

userRouter.post("/login", userController.login);

userRouter.post("/add-form", userController.addForm);

userRouter.post("/get-form", userController.getForm);

module.exports = userRouter;
