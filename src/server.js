import app from "./app.js";
import connectDB from "./configs/db.js";
import dotenv from 'dotenv'
dotenv.config()

connectDB()
const port = process.env.PORT
app.listen(port, () => {
    console.log(`server http://localhost:${port} is running 🔥!`)
})
