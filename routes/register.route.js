import { Router } from "express";
import { registerValidator } from "../middlewares/register.middleware.js";
import { registerController } from "../controllers/register.controller.js";

const userRegister = Router();

userRegister.post('/register', registerValidator, registerController)

export default userRegister