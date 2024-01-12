const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number },
    username: { type: String, unique: true },
    email: { type: String},
    password: { type: String, minLength: 5 },
    // agreement: Boolean,
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

let user = mongoose.model('user', userSchema);

module.exports = user;
