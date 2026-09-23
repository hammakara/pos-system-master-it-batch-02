import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    supplier:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Supplier",
        required:true
    },
    invoiceNumber:{
        type:String,
        required:true,
        unqiue:true,
        trim:true
    },
    purchaseDate:{
        type:Date,
        default:Date.now()
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product",
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                min:0
            },
            price:{
                type:Number,
                required:true,
                min:0
            },
            total:{
                type:Number,
                required:true
            }
        }
    ]


},{timestamps:true})
const Purchase = mongoose.model("Purchase",purchaseSchema)
export default Purchase