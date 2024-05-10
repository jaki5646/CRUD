import { Router } from "express";
import { getProfileValidator } from "../middlewares/getProfile.middleware.js";
import { getProfileController } from "../controllers/getProfile.controller.js";

const getProfile = Router();

getProfile.get('/profile/get', getProfileValidator, getProfileController)

export default getProfile