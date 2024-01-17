const mongoose = require('mongoose')
require('dotenv').config();
function database() {
    mongoose.connect('mongodb://127.0.0.1:27017/auth');
    const db = mongoose.connection;
    db.on('error', (err) => console.error(err))
    db.once('open', () => console.log("connected the database....."));
}
module.exports = database;