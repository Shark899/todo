import 'express-async-wrapper'
import express from 'express'
const app = express()
import Cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import todoRoutes from './routes/Todo.js'
const port = process.env.PORT
app.use(Cors())
app.use(express.json())
app.use('/api/v1', todoRoutes)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}
start()
