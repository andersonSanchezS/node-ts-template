/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express'
import UserModel from '@models/user'
import { create, findAll, findOne } from '@utils/factory'
import HttpException from '@errors/HttpException'

export const createUser = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const user = await create(UserModel, req.body)
        res.status(200).json(user)
    } catch (error:any) {
        next(new HttpException(JSON.parse(error.message), 500))
    }
}

export const getAllUsers = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const users = await findAll(UserModel)
        res.status(200).json(users)
    } catch (error:any) {
        next(new HttpException(JSON.parse(error.message), 500))
    }
}

export const findById = async (req: Request, res: Response, next:NextFunction) => {
    try {
        const user = await findOne(UserModel, req.params.id)
        res.status(200).json(user)
    } catch (error:any) {
        next(new HttpException(JSON.parse(error.message), 500))
    }
}