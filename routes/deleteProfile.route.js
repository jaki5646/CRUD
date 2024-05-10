import { Router } from "express";
import { deleteProfileValidator } from "../middlewares/deleteProfile.middleware.js";
import { deleteProfileController } from "../controllers/deleteProfile.controller.js";

const deleteProfile = Router();

deleteProfile.delete('/profile/delete', deleteProfileValidator, deleteProfileController)

export default deleteProfile