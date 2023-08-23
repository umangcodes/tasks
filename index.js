require('dotenv').config()

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const connectDB = require("./db/connectDB")

const userRoutes = require("./controllers/user.controller")

const PORT = process.env.PORT || 3000

const app = express()
connectDB(process.env.MONGO_CONNECTION_STRING)

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))


app.use("/users", userRoutes)

app.listen(PORT, () => {console.log(`server active at port: ${PORT}`)})