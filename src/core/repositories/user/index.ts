import { BaseRepository } from '@repositories/generic'
import User from '@models/user'
import { User as UserEntity } from '@entities/user'
import { UserValidation } from '@validations/user'

export class UserRepository extends BaseRepository<UserEntity> {
    constructor () {
        super(User, UserValidation)
    }
}