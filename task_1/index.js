require('dotenv').config();
const express = require('express')
const CrudRouter = require('./routes/Auth')
const database = require('./Db')
const app = express()
const PORT_NO = process.env.PORT || 8080;
const cors = require('cors')

//middleware 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// databse connection
database()

// routung
app.use('/user', CrudRouter)
// webserver
app.listen(PORT_NO, ()=> console.log(`server started\nhttps://localhost:${PORT_NO}`)) 