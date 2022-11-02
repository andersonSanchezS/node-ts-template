import { Model } from 'sequelize'

export interface IUser {
    uIdAuto?:number,
    uId?:string,
    uFirstName?:string,
    uLastName?:string,
    uEmail:string,
    uUserName:string,
    uPassword:string,
    uState?:number,
    uSuperUser?:boolean,
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}


// Interface Model
export interface IUserModel extends Model<IUser>, IUser {}