import express from 'express'
import cors from 'cors'
import projectRouter from './routes/projectRoute.js'
import connectDb from './config/db.js'
import personalInfoRouter from './routes/personalInfoRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

connectDb()

app.use('/project',projectRouter)
app.use('/api/personal-info',personalInfoRouter)

app.listen(PORT,()=>{
    console.log("Server Connected and Running Sucessfully")
})