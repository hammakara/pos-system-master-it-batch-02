import mongoose from "mongoose";
const schema = new mongoose.Schema({
    _id:String,
    sequence_value:Number   
})

const  Counter = mongoose.model("Counter",schema)
export default Counter

