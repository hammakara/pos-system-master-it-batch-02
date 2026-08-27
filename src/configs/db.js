import mongoose from 'mongoose'

const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(` Database connected on ${conn.connection.host} ✅`)
        return conn
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connectDB