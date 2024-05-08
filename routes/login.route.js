import { Router } from "express";
import { LoginValidator } from "../middlewares/login.middleware.js";
import { LoginController } from "../controllers/login.controller.js";

const userLogin = Router();

userLogin.post('/login', LoginValidator, LoginController)

export default userLogin