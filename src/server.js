import app from "./app.js";
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server http://localhost:${port} is running!`)
})
// npm i --save-dev nodemon