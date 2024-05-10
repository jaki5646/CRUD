import bcrypt from "bcrypt";

export const authentication = (password, user) => {
    return new Promise((resolve, reject) => {
        const salt = user.salt;
        const hashPassword = bcrypt.hashSync(password, salt);
        if(user.password !== hashPassword) {
            throw reject({
                message: "Sai tài khoản hoặc mật khẩu",
                status: 403
            })
        } else {
            resolve(true)
        }
    })
}