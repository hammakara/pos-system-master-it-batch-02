import Product from "../models/Product.js";
import { generateProductCode } from "./counter.controller.js";
export const create = async(req ,res ,next)=>{
    try {
        const code = await generateProductCode()
        const result = await Product.create({...req.body,code,currentStock:0})
        res.status(200).json({
            success:true,
            result:result
        })
    } catch (error) {
        next(error)
    }
}