import express from 'express'
import { errorHandler } from './helpers/error-handler.js'
import categoryRoute from './routes/category.route.js'
import customerRoute from './routes/customer.route.js'
import supplierRoute from './routes/supplier.route.js'
const app = express()
app.use(express.json())

// routes
app.use('/api/categories', categoryRoute)
app.use('/api/customers', customerRoute)
app.use('/api/suppliers', supplierRoute)

app.use(errorHandler)

export default app

