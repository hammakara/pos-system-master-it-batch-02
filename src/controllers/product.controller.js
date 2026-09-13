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

export const getAll = async (req, res, next) => {
    try {
        // const { page, limit, search } = req.query
        const page = req.query.page || 1
        const limit = req.query.limit || 3
        const skip = (page - 1) * limit
        const searchQuery = {}
        if (req.query.search) {
            searchQuery['$or'] = [
                {
                    name: { $regex: req.query.search, $options: 'i' }
                },
                {
                    code: { $regex: req.query.search, $options: "i" }
                }
            ]
        }
        const result = await Product.find(searchQuery)
            .limit(limit)
            .skip(skip).sort({ createdAt: -1 }).populate({
                path: "category",select: "name"
            })
        const totalRecord = await Product.countDocuments()

        res.status(200).json({
            success: true,
            result: result,

            totalPage: Math.ceil(totalRecord / limit)
        })
    } catch (error) {
        next(error)
    }
}


export const getOne = async (req, res, next) => {
    try {
        const result = await Product.findById(req.params.id)
        if (!result) return res.status(404).json({ success: false, error: "Product not found!" })
        res.status(200).json({
            success: true,
            result: result
        })
    } catch (error) {
        next(error)
    }
}