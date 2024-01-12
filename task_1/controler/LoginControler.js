require('dotenv').config();
const express = require('express');
const user = require('../modals/userModal');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
        // Validate the user
        const { username, password } = req.body;
        const loginUser = user.find(username === username && password === password);

        if (loginUser) {
            const token = jwt.sign({ username: loginUser.username }, process.env.SECRET_KEY);
            res.json({ token });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

module.exports = loginUser;
