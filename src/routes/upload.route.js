import express from 'express'
import { upload } from '../middlewares/upload.middleware.js'
import { removeImage, uploadFile } from '../controllers/upload.controller.js'

const router = express.Router()

router.post('/', upload.single("image"), uploadFile)
router.delete('/:fileName', removeImage)

export default router