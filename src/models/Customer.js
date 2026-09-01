import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is require!"],
        unique: true,
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Phone is require!"],

    },
    address: {
        type: String,
    },
    note: {
        type: String,
    }
}, { timestamps: true })

const Customer = mongoose.model("Customer", customerSchema)
export default Customer