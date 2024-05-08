import jwt from "jsonwebtoken";

export const signToken = ({ payload, privateKey }) => {
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
