import { Model } from 'sequelize'

// Types imports
import { IUser } from '@models/user/types'


interface IUserLog extends IUser {
    id: string
    aLog: number
    userId: string
}

export type TUserLogInstance = Model<IUserLog>