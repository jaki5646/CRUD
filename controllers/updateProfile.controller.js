import { profileModel, userModel } from "../models/user.model.js";
import JWTService from "../utils/jwt.js";

export const updateProfileController = async (req, res, next) => {
    try {
        const user = await JWTService.compareToken(req.headers.authorization.split(" ")[1])
        const userProfile = req.body || null;
        await profileModel.findOneAndUpdate({ owner: user }, userProfile)
        const newProfile = await profileModel.findOne({ owner: user })
        const newUser = await userModel.findOneAndUpdate(user, { profile: newProfile })
        return res.status(202).json({
            message: "Updated new profile successfully",
            data: newProfile
        })
    } catch (e) {
        next(e)
    }
}