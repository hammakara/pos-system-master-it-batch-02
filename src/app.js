import express from 'express'
import { errorHandler } from './helpers/error-handler.js'
import categoryRoute from './routes/category.route.js'
const app = express()
app.use(express.json())

// routes
app.use('/api/categories', categoryRoute)


app.use(errorHandler)

export default app

