import { Router } from "express";
import { updateProfileValidator } from "../middlewares/updateProfile.middleware.js";
import { updateProfileController } from "../controllers/updateProfile.controller.js";

const updateProfile = Router();

updateProfile.put('/profile/update', updateProfileValidator, updateProfileController)

export default updateProfile