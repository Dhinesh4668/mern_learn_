require('dotenv').config();
const express = require('express');
const user = require('../modals/user.Modal'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {
    try {
        const { UserName, password } = req.body;
        // const encodePassword = bcrypt.hash(password, 10) //encrypting the enterd password 
        const loginUser = await user.findOne({
            $or: [
                { username: { $regex: new RegExp(UserName, 'i') } },
                { email: { $regex: new RegExp(UserName, 'i') } }
            ]
        });

        if (!loginUser) {
            console.error('User not found:', UserName);
            return res.status(404).json({ error: `User not found "${UserName}." Please check your username/email.` });
        }
        
        // const passwordMatch = await bcrypt.compare(password, loginUser.password); //comparing the password hashed password
        // console.log(passwordMatch)

        if (password === loginUser.password) {
            const token = jwt.sign({ userId: loginUser._id, username: loginUser.username }, process.env.SECRET_KEY);
            const refreshToken = jwt.sign({ userId: loginUser._id, username: loginUser.username }, process.env.REFRESH_KEY);
            res.status(200).json({
                data: { userId: loginUser._id, username: loginUser.username },
                token,
                refreshToken
            });
        } else {
            console.error('Authentication failed for user:', UserName);
            res.status(401).json({ error: "Invalid password. Please check your password." });
        }
    } catch (err) {
        console.error('Login error:', err);
        res.status(500).json({ error: err.message });
    }
};

module.exports = loginController;
