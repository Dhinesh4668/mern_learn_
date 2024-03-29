const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {type: String, lowercase: true},
    name: {type: String},
    avathor: {type: String}
})

const user = new mongoose.model('user', userSchema);

module.exports = user;