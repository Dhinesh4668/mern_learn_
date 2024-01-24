const mongoose = require('mongoose')
require('dotenv').config();

const DatabaseConnection = () =>{
    mongoose.connect(process.env.DATABASE_URL);
    const database = mongoose.connection;

    database.on('error', err => console.error(err))
    database.on('open', ()=> console.log("Connected database....."))
}

module.exports = DatabaseConnection;