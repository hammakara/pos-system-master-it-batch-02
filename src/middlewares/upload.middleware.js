import multer from 'multer'
import fs from 'fs'
import path from 'path'

import { fileURLToPath } from 'url'


const __fileName = fileURLToPath(import.meta.url)
const __dirName = path.dirname(__fileName)

// uploads dir
const uploadDir = path.join(__dirName, "../../uploads")
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
}

// multer storage config
const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + file.originalname

        cb(null, fileName)
    }
})

// upload function
export const upload = multer({
    storage: diskStorage,
    limits: {
        fileSize: 5 * 1024 * 1024    // MB KB B
    },
    // fileFilter
    fileFilter: (req, file, cb) => {
        // allowed extensions
        const allowedExtensions = [
            ".jpg", ".png", ".jpeg", ".gif"
        ]
        // find original file extension
        const extension = path.extname(file.originalname)
        console.log(extension)
        if (allowedExtensions.includes(extension)) {
            cb(null, true)
        } else {
            cb(new Error("Only Image Extensions .jpg .png .jpeg .gif are allowed"))
        }
    }
})



