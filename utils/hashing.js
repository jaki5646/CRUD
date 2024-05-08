import bcrypt from "bcrypt";

export const authentication = (password, user) => {
    return new Promise((resolve, reject) => {
        const salt = user.salt;
        const hashPassword = bcrypt.hashSync(password, salt);
        if(user.password !== hashPassword) {
            throw reject("Sai tài khoản hoặc mật khẩu")
        } else {
            resolve(true)
        }
    })
}