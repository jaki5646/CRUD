import profileService from "../service/profile.service.js"

export const getProfileController = async (req, res, next) => {
    try {
        const profile = await profileService.getProfile(req.headers.authorization.split(" ")[1]);
        res.status(200).json({
            message: "Successful",
            data: profile
        })
    } catch (e) {
        res.status(409).json({
            message: "User has not created a profile",
            data: null
        })
    }
}