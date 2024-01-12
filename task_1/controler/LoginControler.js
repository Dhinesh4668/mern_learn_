require('dotenv').config();
const express = require('express');
const user = require('../modals/userModal');
const jwt = require('jsonwebtoken');


const loginUser =  (req, res) => {
    try {
        // Validate the user
        const { email,username, password } = req.body;
        const loginUser = user.find((username === username ||username === email) && password === password)

        if (loginUser) {
            const token = jwt.sign({ username: loginUser.username , password: loginUser.password}, process.env.SECRET_KEY);
            const RefreshTocken = jwt.sign({ username: loginUser.username , password: loginUser.password}, process.env.REFRESH_KEY);
            res.status(200).send("login sucessed")
            res.send(loginUser)
            res.json({ token, RefreshTocken });
        } else {
            res.status(401).json({ error: "Invalid credentials" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

module.exports = loginUser;
