const express = require('express')
const DatabaseConnection = require('./config/DatabaseConfig')
const userRouter  = require('./routers/userRouter')
const cors = require('cors')
const app = express()
const path = require('path')
app.use(cors())
app.use(express.json())
app.use(express.static("assets"))

DatabaseConnection();

app.use('/api', userRouter)
app.listen(8080, ()=>console.log("server stated"))