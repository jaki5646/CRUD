import { checkSchema } from 'express-validator'
import { validator } from '../utils/vadilator.js'
import { userModel } from '../models/user.model.js';

export const registerValidator = validator(
    checkSchema(
        {
            username: {
                errorMessage: 'Your username is invalid',
                custom: {
                    options: async (_, { req }) => {
                        const user = await userModel.findOne({ username: req.body.username });
                        if (user) {
                            throw new Error('User is already existed');
                        }
                        return true;
                    },
                },
            },
            password: {isLength: { options: { min: 8 } } },
            confirmPassword: {
                custom: {
                    options: (value, { req }) => {
                        if (value !== req.body.password) {
                            throw new Error('Confirm password is wrong');
                        }
                        return true;
                    },
                },
            },
        },
        ["body"]
    )
)