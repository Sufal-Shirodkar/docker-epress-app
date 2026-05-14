
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDB')

        app.listen(PORT, () => {
            console.log(`Server Is Running On Port ${PORT}`)
        })
    } catch (error) {
        console.log(error.message)
    }
}

startServer()

app.use('/', (req, res) => {
    return res.json({message: "CI/CD Pipeline Connected !! 🚀 Node.js and Express.js are working together"})
})

