import express from 'express'
import { getAll, getOne, remove, update } from '../controllers/user.controller.js'
const router = express.Router()

router.get('/',getAll)
router.get('/:id',getOne)
router.put('/:id',update)
router.delete('/:id',remove)

export default router