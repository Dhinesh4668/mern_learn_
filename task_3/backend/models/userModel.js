const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    name: String,
    age: Number,
    dob: Date,
    interest: Boolean,
    profilePic: String

},{timeseries: true});

const user = mongoose.model('user', userSchema)

module.exports = user;