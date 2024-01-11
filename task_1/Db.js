const mongoose = require('mongoose')
require('dotenv').config();
// const url = process.env.DATABASE_URL;


function database() {
    mongoose.connect('mongodb://127.0.0.1:27017/');
    const db = mongoose.connection;

    db.on('error', (err) => console.error(err))
    db.once('open', () => console.log("connected the database....."));
}
module.exports = database;