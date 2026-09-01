import mongoose from "mongoose";

const supplierSchema = new mongoose.Schema({
    businessName: {
        type: String,
        required: [true, "Name is require!"],
        unique: true,
    },
    name: {
        type: String,
        required: [true, "Name is require!"],
    },
    phone: {
        type: String,
        required: [true, "Phone is require!"],

    },

    note: {
        type: String,
    }
}, { timestamps: true })

const Supplier = mongoose.model("Supplier", supplierSchema)
export default Supplier