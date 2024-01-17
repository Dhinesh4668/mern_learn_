const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config()

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    username: { type: String, maxLength: 15, unique: true, sparse: true },
    email: { type: String, lowercase: true, unique: true, sparse: true },
    password: {
        type: String,
        required: true,
        validate: {
            notEmpty: true,
            validator: validatePassword,
            message: "Password must be at least 8 characters long and contain at least 1 uppercase letter, 6 lowercase letters, 1 special character, and 1 digit."
        }
    },
    gender: String,
    terms_and_condition: { type: Boolean, required: true }
});

// Encrypting the password
userSchema.pre('save', async function (next) {
  if(this.isModified('password')) {
    this.password = bcrypt.hash(this.password, process.env.ROUND_KEY);
    this.cpassword = bcrypt.hash(this.password, process.env.ROUND_KEY);
    
  }
  next()
});

// Password validation function
async function validatePassword(value) {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*(?:password|123456)).{8,1024}$/;
    return passwordRegex.test(value);
}

const User = mongoose.model('User', userSchema);

module.exports = User;