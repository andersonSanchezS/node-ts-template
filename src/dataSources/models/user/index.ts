/* eslint-disable @typescript-eslint/no-explicit-any */

// Id Generator
import { nanoid } from 'nanoid'

// Sequelize and database connection
import sequelize from '@db/db'
const db = sequelize()

// Sequelize Types
import Sequelize from 'sequelize'

// Project interface
import { IUserModel } from './types'

// Project logs model
import UserLog from '@log/user'

const UserModel = db.define<IUserModel>('user', {
    uIdAuto: {
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true
    },
    uId: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    uFirstName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            len: [0, 50],
            is: /^[a-zA-Z0-9_ ]*$/i,
            notEmpty: {
                msg: 'el nombre no puede estar vacío'
            }
        }
    },
    uLastName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        validate: {
            len: [0, 50],
            is: /^[a-zA-Z0-9_ ]*$/i,
            notEmpty: true
        }
    },
    uEmail: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    uUserName: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            len: [0, 50],
            is: /^[a-zA-Z0-9_ ]*$/i,
            notEmpty: true
        }
    },
    uPassword: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    uState: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1
    },
    uSuperUser: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    paranoid: true,
    hooks: {

        beforeCreate: (attributes: any, options: any) => {
            const id = !!attributes.uId
            options.rqType = options.updateOnDuplicate ? id ? 'BULKUPDATE' : 'BULKCREATE' : 'CREATE'
            attributes.uId = attributes.uId || nanoid(32)
            return options
        },

        afterUpdate: (attributes: any, options: any) => {
            UserLog.create({
                ...attributes?.dataValues,
                aLog: 2,
                userId: options.context?.uId,
                createdAt: undefined,
                updatedAt: undefined,
                deletedAt: undefined
            })
                .catch(() => undefined)
            // Return registered attributes
            return attributes
        },

        afterCreate: (attributes: any, options: any) => {
            UserLog.create({
                ...attributes?.dataValues,
                aLog: options.rqType === 'BULKUPDATE' ? 2 : 1,
                userId: options.context?.uId,
                createdAt: undefined,
                updatedAt: undefined,
                deletedAt: undefined
            })
                .catch(() => undefined)
            // Return registered attributes
            return attributes
        }
    }
})

export default UserModel