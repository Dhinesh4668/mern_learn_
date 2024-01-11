const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    // keys of the users 
    name: String,
    age: Number,
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: String,
    aggrement: Boolean,
    
})
module.exports = mongoose.model('user',userSchema)