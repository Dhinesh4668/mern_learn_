const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    username: { type: String, maxLength: 15},
    email: { type: String, lowercase: true},
    password: {
        type: String,
        required: true,
        validate: /^(?=.*\d)(?=.*[a-z]{2})(?=.*[A-Z]{3})(?=.*[@#$%^&+=])(?=\S+$).{8,}$/,
        message: "Password must be at least 8 characters long and contain at least 3 uppercase letters, 2 lowercase letters, 1 special character, and 1 digit."
    },
    gender: {type: String},
    terms_and_condition: {type: Boolean, required: true}
});

// encrypting the password
userSchema.pre('save', function (next) {
    if (this.password && this.isModified('password')) {
        const hashed = bcrypt.hashSync(this.password, 10);
        this.password = hashed;
    }
    next();
});
const user = mongoose.model('user', userSchema);

module.exports = user;
