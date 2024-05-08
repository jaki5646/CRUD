import userService from '../service/user.service.js';

export const registerController = async (req, res, next) => {
    const { username, password } = req.body;
    const registered = await userService.register(username, password);
    return res.json({
      message: "Register Successfully",
      token: registered
    });
  };