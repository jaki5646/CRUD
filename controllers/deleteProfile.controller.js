import { profileModel, userModel } from "../models/user.model.js";
import userService from "../service/user.service.js";
import JWTService from "../utils/jwt.js";

export const deleteProfileController = async (req, res, next) => {
    try {
        const user = await JWTService.compareToken(req.headers.authorization.split(" ")[1])
        await userService.logout(req.headers.authorization.split(" ")[1])
        const loggedOutUser = await userModel.findOne({ username: user.username })
        await profileModel.findOneAndUpdate({ owner: user }, { owner: loggedOutUser, terminate: true })
        const newProfile = await profileModel.findOne({ owner: loggedOutUser })
        const newUser = await userModel.findOneAndUpdate(loggedOutUser, { profile: newProfile })
        return res.status(202).json({
            message: "Deleted profile successfully",
        })
    } catch (e) {
        next(e)
    }
}