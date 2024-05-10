import bcrypt from "bcrypt";
import JWTService from "../utils/jwt.js";
import { config } from "dotenv";
import { userModel } from "../models/user.model.js";
import { uuid } from "uuidv4";
config();

class UserService {
  async register(username, password) {
    const GLOBAL_ID = uuid()
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    await userModel.create({ username, password: hashPassword, salt, GLOBAL_ID });
    const access_token = await JWTService.signToken({
      payload: {
        username,
        password: hashPassword,
        GLOBAL_ID,
      },
      privateKey: process.env.JWT_PRIVATE_KEY,
    });
    return access_token;
  }
  async login(username, password) {
    const GLOBAL_ID = uuid()
    await userModel.findOneAndUpdate({ username, password }, { GLOBAL_ID });
    const access_token = await JWTService.signToken({
      payload: {
        username,
        password,
        GLOBAL_ID
      },
      privateKey: process.env.JWT_PRIVATE_KEY,
    });
    return access_token;
  }
  async logout(token) {
    JWTService.deleteToken(token)
  }
}

const userService = new UserService();

export default userService;