const express = require('express')
const DatabaseConnection = require('./config/DatabaseConfig')
const userRouter  = require('./routers/userRouter')
const app = express()
app.use(express.json())
DatabaseConnection();


app.use('/api', userRouter)
app.listen(8080, ()=>console.log("server stated"))