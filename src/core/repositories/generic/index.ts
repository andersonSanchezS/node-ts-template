/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRead, IWrite } from '@interfaces/index'
import HttpException from '@errors/HttpException'

export abstract class BaseRepository<T> implements IRead<T>, IWrite<T> {

    public readonly _model: any

    public readonly _validations:any

    constructor(model:any, validations:any) {
        this._model = model
        this._validations = validations
    }

    find(item: T): Promise<T[]> {
        throw new Error('Method not implemented.')
    }

    findOne(id: string): Promise<T> {
        throw new Error('Method not implemented.')
    }

    findByParams(params: T): Promise<T> {
        throw new Error('Method not implemented.')
    }

    async create(item: T): Promise<boolean> {
        try {
            const validate = new this._validations(item).create()

            if (validate !== undefined) throw new Error(JSON.stringify(validate))
            const result = await this._model.create(item)
            return result
        } catch (error:any) {
            throw new HttpException(JSON.parse(error.message), 400)
        }
    }

    update(id: string, item: T): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

    delete(id: string): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

    bulkCreate(items: T[]): Promise<boolean> {
        throw new Error('Method not implemented.')
    }

}