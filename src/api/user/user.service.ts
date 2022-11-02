/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import { UserRepository } from '@repositories/index'

export const createUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const repository = new UserRepository()
        const user = await repository.create(req.body)
        res.status(200).json(user)
    } catch (error:any) {
        next(error)
    }
}