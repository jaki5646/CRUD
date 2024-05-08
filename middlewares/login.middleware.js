import { checkSchema } from 'express-validator'
import { validator } from '../utils/vadilator.js'
import { userModel } from '../models/user.model.js';
import { authentication } from '../utils/hashing.js';

export const LoginValidator = validator(
    checkSchema(
        {
            username: {
                errorMessage: "Sai tài khoản hoặc mật khẩu",
                custom: {
                    options: async (_, { req }) => {
                        const user = await userModel.findOne({ username: req.body.username });
                        if(user) {
                            await authentication(req.body.password, user);
                        }
                        else {
                            throw new Error('Sai tài khoản hoặc mật khẩu')
                        }
                    },
                },
            }
        }, ["body"]
    )
)