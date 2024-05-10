import userService from "../service/user.service.js";

export const LogoutController = async (req, res, next) => {
    const username = await userService.logout(req.headers.authorization.split(" ")[1])
    return res.json({
        message: "Logout successfully",
        user: username
    })
}