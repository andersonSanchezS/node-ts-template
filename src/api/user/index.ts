import { Router } from 'express'
import { createUser } from './user.service'
const router = Router()

// Main endpoint
router.post('/create', createUser)

export default router