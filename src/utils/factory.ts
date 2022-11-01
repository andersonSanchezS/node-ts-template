/* eslint-disable @typescript-eslint/no-explicit-any */

export const create = async (model: any, data: any) => {
    try {
        const create = await model.create(data)
        return create
    } catch (error:any) {
        const errors = error.errors.map((err:any) => ({ field: err.path, message: err.message }))
        throw new Error(JSON.stringify(errors))
    }
}

export const findAll = async (model: any) => {
    try {
        const findAll = await model.findAll()
        return findAll
    } catch (error:any) {
        throw new Error(JSON.stringify(error))
    }
}

export const findOne = async (model: any, id: any) => {
    try {
        const findOne = await model.findOne({ where: { id } })
        return findOne
    } catch (error:any) {
        throw new Error(JSON.stringify(error))
    }
}