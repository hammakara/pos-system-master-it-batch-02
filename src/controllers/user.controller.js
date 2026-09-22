import User from "../models/User.js"

export const getAll = async (req, res, next) => {
    try {
        // const { page, limit, search } = req.query
        const page = req.query.page || 1
        const limit = req.query.limit || 1
        const skip = (page - 1) * limit
        const searchQuery = {}
        if (req.query.search) {
            searchQuery['$or'] = [
                {
                    username: { $regex: req.query.search, $options: 'i' }
                },
                {
                    email: { $regex: req.query.search, $options: 'i' }
                }
            ]
        }
        const result = await User.find({
            ...searchQuery,email:{$ne: req.user.email}
        })
            .limit(limit)
            .skip(skip).sort({ createdAt: -1 })

            
        const totalRecord = await User.find({
            ...searchQuery,email:{$ne: req.user.email}
        }).countDocment()

        res.status(200).json({
            success: true,
            result: result,

            totalPage: Math.ceil(totalRecord / limit)
        })
    } catch (error) {
        next(error)
    }
}