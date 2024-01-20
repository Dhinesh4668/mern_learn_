const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 30},
    age: {type: Number, require: true},
    email: {type: String, required: true, lowercase: true,unique: true, sparse: true},
    mobile: {type: Number, required: true,  min: [10, 'enter the valide 10 digit mobile number']}
},{timestamps: true},{countDocuments: true})

const task = mongoose.model('task', taskSchema);

module.exports = task;