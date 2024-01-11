const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    // keys of the users 
    name: String,
    age: Number,
    username:String,
    email:String,
    password: String,
    aggrement: Boolean,
    
})
module.exports = mongoose.model('user',userSchema)