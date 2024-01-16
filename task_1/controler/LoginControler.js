require('dotenv').config();
const express = require('express');
const user = require('../modals/userModal');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const loginController = async (req, res) => {
    try {
        const { UserName, password } = req.body;
        const loginUser = await user.findOne({
            $or: [
                { username: UserName },
                { email: UserName }
            ]
        });

        if (!loginUser) {
            console.error('User not found:', UserName);
            return res.status(404).json({ error: "User not found. Please check your username/email." });
        }

        if (await bcrypt.compare(password, loginUser.password)) {
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