// Sequelize types
import Sequelize from 'sequelize'

// Project logs interface
import { TUserLogInstance } from './types'

// Db connection
import sequelize from '@db/db'
const db = sequelize()

const UserLog = db.define<TUserLogInstance>('userLog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uId: Sequelize.STRING(50),
    uIdAuto: Sequelize.INTEGER,
    uFirstName: Sequelize.STRING(50),
    uLastName: Sequelize.STRING(50),
    uEmail: Sequelize.STRING(50),
    uUserName: Sequelize.STRING(50),
    uPassword: Sequelize.STRING(50),
    uSuperUser: Sequelize.BOOLEAN,
    uState: Sequelize.INTEGER,
    aLog: Sequelize.INTEGER,
    userId: Sequelize.STRING(50)
}, {
    timestamps: true,
    paranoid: true
})


export default UserLog