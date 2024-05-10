import jwt from "jsonwebtoken";
import { userModel } from "../models/user.model.js";
import { uuid } from "uuidv4";


class jwtService {
  signToken({ payload, privateKey }) {
    return new Promise((resolve, reject) => {
      const token = jwt.sign(payload, privateKey, {
        expiresIn: "48h",
        algorithm: "HS256",
        header: {
          typ: "jwt"
        }
      });
      if (!token) {
        throw reject(token);
      } else {
        resolve(token);
      }
    });
  };
  verifyToken(token) {
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY)
  }
  async compareToken(token) {
      const user = await userModel.findOne({ GLOBAL_ID: jwt.decode(token).GLOBAL_ID })
      if (!user) {
        throw new Error("User does not exist")
      }
      else {
        return user
    }
  }
  async deleteToken(token) {
    try {
      const user = jwt.decode(token)
      const newID = uuid()
      await userModel.findOneAndUpdate({ GLOBAL_ID: user.GLOBAL_ID }, { GLOBAL_ID: newID })
      const { username } = await userModel.findOne({ GLOBAL_ID: newID })
      if (!username || username === undefined) {
        throw new Error("Account does not exist")
      } else {
        return username
      }
    } catch (e) {
      return e
    }
  }
}
const JWTService = new jwtService();

export default JWTService;
