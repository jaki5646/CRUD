import { profileModel, userModel } from "../models/user.model.js";
import JWTService from "../utils/jwt.js";

export const createProfileController = async (req, res, next) => {
    try {
        const user = await JWTService.compareToken(req.headers.authorization.split(" ")[1]);
        //has a deleted profile
        const deletedProfile = await profileModel.findOne({ owner: user, terminate: true })
        const userProfile = req.body || null;
        if (deletedProfile) {
            const newProfile = await profileModel.findOneAndUpdate({ owner: user }, { ...userProfile, terminate: false })
            return res.status(201).json({
                message: "Created new profile successfully",
                data: newProfile
            })
        }
        //has not yet created profile
        else {
            const newProfile = await profileModel.create({
                owner: user,
                ...userProfile,
                terminate: false,
            })
            const newUser = await userModel.findOneAndUpdate(user, { profile: newProfile })
            return res.status(201).json({
                message: "Created new profile successfully",
                data: newProfile
            })
        }
    } catch (e) {
        next(e)
    }
}