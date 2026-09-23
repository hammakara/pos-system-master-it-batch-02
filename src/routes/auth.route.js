import express from 'express'
import { signin, signout, signup } from '../controllers/auth.controller.js'
import { protect } from '../middlewares/auth.middleware.js'
import { Roles } from '../middlewares/permission.middleware.js'

const router = express.Router()

router.post('/signup',protect,Roles("manager"),signup)
router.post('/signin',signin)
router.get('/signout',protect,signout)

router.get('/profile',protect,(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user
    })
})


export default router