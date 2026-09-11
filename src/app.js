import express from 'express'
import { errorHandler } from './helpers/error-handler.js'
import categoryRoute from './routes/category.route.js'
import customerRoute from './routes/customer.route.js'
import supplierRoute from './routes/supplier.route.js'
import uploadRoute from './routes/upload.route.js'
import productRoute from './routes/product.route.js'
const app = express()
app.use(express.json())

// routes
app.use('/api/categories', categoryRoute)
app.use('/api/customers', customerRoute)
app.use('/api/suppliers', supplierRoute)
app.use('/api/upload', uploadRoute)
app.use('/api/products',productRoute)
app.use(errorHandler)

export default app

