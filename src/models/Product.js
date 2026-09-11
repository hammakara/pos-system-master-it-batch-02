import mongoose, { mongo } from "mongoose";

const schema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required!"],
        unique:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true,"category is required!"],
        ref:"categories"
    },
    code:{
        type:String,
        required:true,
        unique:true
    },
    image_url:{
        type:String,
        required:[true,"Image is required!"]
    },
    costPrice:{
        type:Number,
        required:[true,"costPrice is required!"]
    },
    salePrice:{
        type:Number,
        required:[true,"sale price is required!"]
    },
    currentStock:{
        type:Number,
        default:0
    }
},{timestamps:true})
const  Product = mongoose.model("products",schema)
export default Product