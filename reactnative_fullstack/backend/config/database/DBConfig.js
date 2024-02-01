const mongoose = require("mongoose")

const DBConfig = async () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/reactnative-app');
    const db = mongoose.connection;
    db.on('error', (err)=> console.error(err.message));
    db.once("open", ()=> console.log("database connected sucessfully..........."));
}

module.exports = DBConfig