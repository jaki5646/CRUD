import bcrypt from "bcrypt";
import { signToken } from "../utils/jwt.js";
import { config } from "dotenv";
import { userModel } from "../models/user.model.js";
config();

class UserService {
  async register(username, password) {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    await userModel.create({ username, password: hashPassword, salt });
    const access_token = await signToken({
      payload: {
        username,
        password: hashPassword
      },
      privateKey: process.env.JWT_PRIVATE_KEY,
    });
    return access_token;
  }
  async login(username, password) {
    const access_token = await signToken({
      payload: {
        username,
        password,
      },
      privateKey: process.env.JWT_PRIVATE_KEY,
    });
    return access_token;
  }
}

const userService = new UserService();

export default userService;
