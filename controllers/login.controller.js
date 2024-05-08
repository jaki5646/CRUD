import { userModel } from "../models/user.model.js";
import userService from "../service/user.service.js";

export const LoginController = async (req, res, next) => {
    const { username } = req.body;
    const user = await userModel.findOne({ username })
    const loggedIn = await userService.login(user.username, user.password);
    return res.json({
        message: "Logged in Successfully",
        token: loggedIn
    });
}