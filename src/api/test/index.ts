import { Router } from 'express'
import { createUser, getAllUsers, findById } from './test.service'
const router = Router()

// Main endpoint
router.post('/create', createUser)
router.get('/', getAllUsers)
router.get('/:id', findById)

export default router