const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    username: { type: String, maxLength: 15},
    email: { type: String, lowercase: true},
    password: { type: String, require: true ,minLength: 5 },
    gender: {type: String}
});

// encrypting the password
userSchema.pre('save', function (next) {
    if (this.password && this.isModified('password')) {
        const hashed = bcrypt.hashSync(this.password, 10);
        this.password = hashed;
    }
    next();
});

userSchema.methods.checkPassword = function (enteredPassword) {
    return bcrypt.compareSync(enteredPassword, this.password);
};

const user = mongoose.model('user', userSchema);

module.exports = user;
