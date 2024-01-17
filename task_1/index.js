require('dotenv').config();
const express = require('express')
const CrudRouter = require('./routes/Auth.router')
const database = require('./config/Db.config')
const app = express()
const PORT_NO = process.env.PORT;

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// databse connection
database()

// routung
app.use('/user', CrudRouter)

// webserver
app.listen(PORT_NO, ()=> console.log(`server started\nhttps://localhost:${PORT_NO}`)) 