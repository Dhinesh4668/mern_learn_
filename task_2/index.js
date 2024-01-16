const express = require('express')
const app = express()
const PORT  = process.env.PORT || 8080;
const databse = require('./config/Db.config')

app.use(express.json())
app.use(express.urlencoded({extended: true})) //parse requests of content-type - application/x-www-form-urlencoded
// databse
databse();


// route
app.use('/api', CRUD)
app.listen(PORT, ()=> console.log("server started"))