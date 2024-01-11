const express = require('express');
const user = require('../modals/userModal'); 

const LoginConroler = async (req, res) => {
    try {
        // validate the user
        const { usernameORemail, password } = req.body;

        // find user by username or email
        const userLogin = await user.findOne({
            $or: [{ username: usernameORemail }, { email: usernameORemail }],
        });

        if (!userLogin) {
            return res.status(401).json({ message: "Invalid user, please register" });
        }
        // check the password
        // const passMatch = await bcryptjs.compare(password, userLogin.password);
        if (!password) {
            return res.status(401).json({ message: "Invalid password, please try again" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

module.exports = LoginConroler