/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { User } from '@entities/user'

import joi from 'joi'

import userModel from '@models/user'


export class UserValidation {

    public readonly _user:User

    constructor(user:User) {
        this._user = user
    }

    create() {

        const errors:any[] = []

        const validateEmail = userModel.findOne({ where: { uEmail: this._user.uEmail } })
        const validateUserName = userModel.findOne({ where: { uUserName: this._user.uUserName } })

        if (validateEmail !== null) errors.push({ email: 'Este email ya se encuentra registrado' })
        if (validateUserName !== null) errors.push({ username: 'Este nombre de usuario ya se encuentra registrado' })

        if (errors.length) return errors

        const schema = joi.object({
            uFirstName: joi.string()
                .min(3)
                .max(50)
                .required()
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 3 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                }),
            uLastName: joi.string()
                .min(3)
                .max(50)
                .required()
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 3 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                }),
            uEmail: joi.string()
                .email()
                .required()
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.email': 'Este campo debe ser un email válido'
                }),
            uUserName: joi.string()
                .min(5)
                .max(50)
                .required()
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 5 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                }),
            uPassword: joi.string()
                .min(8)
                .max(50)
                .required()
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 8 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                })
        })
        return schema.validate(this._user, { abortEarly: false }).error?.details.map((error:any) => ({
            message: error.message,
            path: error.path[0]
        }))
    }

    update() {
        const schema = joi.object({
            uFirstName: joi.string()
                .min(3)
                .max(50)
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 3 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                }),
            uLastName: joi.string()
                .min(3)
                .max(50)
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 3 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                }),
            uEmail: joi.string()
                .email()
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.email': 'Este campo debe ser un email válido'
                }),
            uUserName: joi.string()
                .min(5)
                .max(50)
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 5 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                }),
            uPassword: joi.string()
                .min(8)
                .max(50)
                .messages({
                    'string.empty': 'Este campo es requerido',
                    'string.min': 'Este campo debe tener al menos 8 caracteres',
                    'string.max': 'Este campo debe tener como máximo 50 caracteres'
                })
        })
        return schema.validate(this._user, { abortEarly: false }).error?.details
    }

}
