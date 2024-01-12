const express = require('express');
const user = require('../modals/userModal');

const loginUser = async (req, res) => {
    try {
        // validate the user
        const { username, password } = req.body;

        // find user by username or email
        const foundUser = await user.findOne({
            $or: [{ username: usernameORemail }, { email: usernameORemail }],
        });
        if (!foundUser) {
            return res.status(404).send("Invalid user, please sign up");
        }
        const isPasswordValid = await foundUser.checkPassword(password);

        if (!isPasswordValid) {
            console.log("Invalid user and password");
            return res.status(401).send("Invalid user and password");
        }
        res.status(200).send("Login successful");
    } catch (err) {
        res.status(500).send(err.message);
    }
};

module.exports = loginUser;