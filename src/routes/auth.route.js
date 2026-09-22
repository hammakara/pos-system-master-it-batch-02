import express from 'express'
import { signin, signup } from '../controllers/auth.controller.js'
import { protect } from '../middlewares/auth.middleware.js'
import { Roles } from '../middlewares/permission.middleware.js'

const router = express.Router()

router.post('/signup',protect,Roles("manager"),signup)
router.post('/signin',signin)

export default router