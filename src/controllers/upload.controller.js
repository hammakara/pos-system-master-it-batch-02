export const uploadFile = (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: "No file Uploaded!"
            })
        }
        res.status(200).json({
            success: true,
            message: "Image uploaded success!",
            fileName: req.file.filename
        })
    } catch (error) {
        console.error(error)
    }
}