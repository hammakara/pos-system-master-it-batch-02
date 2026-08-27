import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require!"],
        trim: true,
        unique: true
    },
    note: {
        type: String,
    }
}, { timestamps: true })
const Category = mongoose.model("Category", categorySchema)
export default Category