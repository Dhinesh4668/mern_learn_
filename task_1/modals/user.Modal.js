const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const userSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    username: { type: String, maxLength: 15, unique: true, sparse: true },
    email: { type: String, lowercase: true, unique: true, sparse: true },
    password: {
      type: String,
      minLength: 8,
      required: true,
      validate: {
        validator: function validatePassword(value) {
          // Check the
          return /^(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*]{1})(?=.*\d).{8,}$/.test(value)
        },
        notEmpty: true,
        message: "Password must be at least 8 characters long and contain at least 1 uppercase letter, 6 lowercase letters, 1 special character, and 1 digit.",
      },
    },
    gender: String,
    terms_and_condition: { type: Boolean, required: true },
  },
  { timestamps: true }
);

// Encrypting the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hash(this.password, 10);
    this.cpassword = bcrypt.hash(this.password, 10);
  }
  next();
});

// password validation
userSchema.methods.validatePassword = function () {
  // Check if the password contains at least one uppercase letter, one lowercase letter, one special character, and one digit
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d).{8,}$/.test(this.password);
};


// tems must be true
userSchema.path("terms_and_condition").validate(function (value) {
  return value === true;
}, "Terms and conditions must be accepted.");

const User = mongoose.model("User", userSchema);

module.exports = User;
