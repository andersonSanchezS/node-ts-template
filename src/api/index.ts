import { Router } from 'express'
import testRouter from './test'

const router = Router()

router.use('/users', testRouter)

export default router