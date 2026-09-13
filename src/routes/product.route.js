import express from 'express'
import { create, getAll, getOne } from '../controllers/product.controller.js'
const router=express.Router()


router.post('/',create)
router.get('/',getAll)
export default router