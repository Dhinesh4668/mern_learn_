const mongoose = require('mongoose')

// design user schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    DateOfBirth: Date,
    email: String,
    password: String
},{timestamps: true})

const User = mongoose.model("User", userSchema)
module.exports = User