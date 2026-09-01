import Customer from "../models/Customer.js"
export const create = async (req, res, next) => {
    try {
        const result = await Customer.create(req.body)
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
                    phone: { $regex: req.query.search, $options: "i" }
                }
                ,
                {
                    address: { $regex: req.query.search, $options: 'i' }
                }
            ]
        }
        const result = await Customer.find(searchQuery)
            .limit(limit)
            .skip(skip).sort({ createdAt: -1 })
        const totalRecord = await Customer.countDocuments()

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
        const result = await Customer.findById(req.params.id)
        if (!result) return res.status(404).json({ success: false, error: "Customer not found!" })
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
        const result = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!result) return res.status(404).json({ success: false, error: "Customer not found!" })
        res.status(200).json({
            success: true,
            result: result
        })
    } catch (error) {
        next(error)
    }
}
export const remove = async (req, res, next) => {
    try {
        const result = await Customer.findByIdAndDelete(req.params.id)
        if (!result) return res.status(404).json({ success: false, error: "Customer not found!" })
        res.status(201).json({
            success: true,
            result: []
        })
    } catch (error) {
        next(error)
    }
}
