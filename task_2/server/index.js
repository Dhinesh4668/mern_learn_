require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const PORT_NO = process.env.PORT
const router = require('./routes/root.router');
const databaseConnection = require('./config/Database.config');
const {logger} = require('./middleware/logger.middleware')
const corsOptions = require('./config/corsOriginConfig/corsOptions')

// middleware 
app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())

// router
app.use('/api', router)

// db connection
databaseConnection();
app.listen(PORT_NO, ()=>console.log("server started"))