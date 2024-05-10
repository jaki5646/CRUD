import { Router } from "express";
import { createProfileValidator } from "../middlewares/createProfile.middleware.js";
import { createProfileController } from "../controllers/createProfile.controller.js";

const createProfile = Router();

createProfile.post('/profile/create', createProfileValidator, createProfileController)

export default createProfile