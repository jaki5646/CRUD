import JWTService from "../utils/jwt.js";

export const LogoutValidator = async (req, res, next) => {
    try{
        if(!req.headers.authorization) {
            throw new Error("Token required")
        }
        JWTService.verifyToken(req.headers.authorization.split(" ")[1])
        await JWTService.compareToken(req.headers.authorization.split(" ")[1])
        next();
    } catch(e) {
        next(e)
    }
};