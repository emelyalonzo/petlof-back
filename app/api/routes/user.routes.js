const express = require("express");
const userRouter = express.Router();

//importamos las funciones del controlador y del middleware
const { createUser, logIn, logout, updateUser, getOneUser} = require("../controllers/user.controller");
const { isAuth } = require("../../middlewares/auth.middleware")

userRouter.post("/signup", createUser);
userRouter.put("/edit", updateUser);
userRouter.get("/", getOneUser);
userRouter.post("/signin", logIn);
userRouter.post("/logout", [isAuth], logout);

module.exports = userRouter;