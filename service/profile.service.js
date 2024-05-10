import { profileModel } from "../models/user.model.js";
import JWTService from "../utils/jwt.js";

class ProfileService {
    async getProfile(token) {
        try {
            const user = await JWTService.compareToken(token)
            const profile = await profileModel.findOne({ owner: user })
            if(!profile) {throw new Error("User has not yet created a profile")}
            if(profile.terminate) {throw new Error("User has deleted their profile")}
            return profile
        } catch (e) {
            throw new Error(e)
        }
    }
}

const profileService = new ProfileService();

export default profileService;