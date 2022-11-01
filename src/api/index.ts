import { Router } from 'express'
import testRouter from './user'

const router = Router()

router.use('/users', testRouter)

export default router