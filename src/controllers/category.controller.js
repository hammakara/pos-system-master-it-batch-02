import Category from "../models/Category.js";

export const create = async (req, res, next) => {
    try {
        const result = await Category.create(req.body)
        res.status(201).json({
            success: true,
            data: result
        })
    } catch (error) {
        next(error)
    }
}
export const getAll = async (req, res, next) => {
    try {
        console.log(req.user)
        // const { page, limit, search } = req.query
        const page = req.query.page || 1
        const limit = req.query.limit || 1
        const skip = (page - 1) * limit
        const searchQuery = {}
        if (req.query.search) {
            searchQuery['$or'] = [
                {
                    name: { $regex: req.query.search, $options: 'i' }
                },
                {
                    note: { $regex: req.query.search, $options: 'i' }
                }
            ]
        }
        const result = await Category.find(searchQuery)
            .limit(limit)
            .skip(skip).sort({ createdAt: -1 })
        const totalRecord = await Category.countDocuments()

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
        const result = await Category.findById(req.params.id)
        if (!result) return res.status(404).json({ success: false, error: "Category not found!" })
        res.status(200).json({
            success: true,
            result: result
        })
    } catch (error) {
        next(error)
    }
}
export const update = async (req, res, next) => {
    try {
        const result = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true})
         if (!result) return res.status(404).json({ success: false, error: "Category not found!" })
        res.status(200).json({
            success: true,
            result:result
        })
    } catch (error) {
        next(error)
    }
}
export const remove = async (req, res, next) => {
    try {
        const result = await Category.findByIdAndDelete(req.params.id)
        if (!result) return res.status(404).json({ success: false, error: "Category not found!" })
        res.status(201).json({
            success: true,
            result: []
        })
    } catch (error) {
        next(error)
    }
}
