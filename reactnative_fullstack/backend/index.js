require("dotenv").config()
const express = require('express')
const DBConfig = require("./config/database/DBConfig")
const userRouter = require("./routers/userRouter")
const port_no = process.env.PORT || 8080
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
// database config
DBConfig();
app.use('/api/user', userRouter)
app.listen(port_no , ()=> console.log("server started"))