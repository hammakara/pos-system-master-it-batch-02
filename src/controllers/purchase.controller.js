import { calculatePaymentStatus } from "../helpers/calculatePaymentStatus.js"
import Product from "../models/Product.js"
import Purchase from "../models/Purchase.js"

export const create = async(req ,res ,next)=>{
    try {
        const {items,totalCost,purchaseStatus} = req.body

        //1. calculate paymentStatus (paid,due,partial)
        const paymentStatus = calculatePaymentStatus(totalCost,0)
        
        // auto update stock product if pruchaseStatus=="received"
        if(purchaseStatus==="received"){
            for(const item of items){
                const product = await Product.findById(item.product)
                if(!product) return res.status(404).json({success:false,error:`Products ${product.name} not found!`})
                product.currentStock = (product.currentStock ||0) + item.quantity
                await product.save()
            }
        }
        // 2.insert data into database
        const result = await Purchase.create({
            ...req.body,
            user:req.user?._id,
            items,
            dueAmount:totalCost,
            paymentStatus,
            purchaseStatus,
        })
        res.status(201).json({
            success:true,
            result:result
        })
    } catch (error) {
        next(error)
    }
}