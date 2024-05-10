import { Router } from "express";
import { LogoutValidator } from "../middlewares/logout.middleware.js";
import { LogoutController } from "../controllers/logout.controller.js";

const userLogout = Router();

userLogout.post('/logout', LogoutValidator, LogoutController)

export default userLogout