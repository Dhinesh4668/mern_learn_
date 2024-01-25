require('dotenv').config();
const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs')


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // const Salt = await bcrypt.genSaltSync(10)
    const encrypt_Pass = await bcrypt.hash(password, 10)
    // Check if the user with the provided email exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: `User not found. Please check your email.`,
      });
    }
    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        error: "Invalid password",
      });
    }
    // Generate JWT tokens
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "30d" }
    );
    const refreshToken = jwt.sign(
      { userId: user._id, email: user.email  },
      process.env.REFRESH_KEY,
      { expiresIn: "30d" }
    );
    // Send response with tokens and user data
    res.status(200).json({
      data: { userId: user._id, email: user.email, name: user.name, avathor: user.profilePic },
      token,
      refreshToken,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = login;
