import mongoose from 'mongoose'

const schema = mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is require!"],
        unique:true,
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is required!"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Password is required!"]
    },
    role:{
        type:String,
        enum:["admin","manager","cashier"],
        default:"cashier"
    }
},{timestamps:true})
const User = mongoose.model("User",schema)
export default User