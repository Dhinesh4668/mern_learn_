const express = require('express');
const bcryptjs = require('bcryptjs'); 
const user = require('../modals/userModal');  
const register = async (req, res) => {
    try {
        // validate the user input (you might want to add more validation)
        const { name, username, age, gender, email, password } = req.body;

        // hash the password
        const salt = await bcryptjs.genSalt(10);
        // const hashedPassword = await bcryptjs.hash(password, salt);

        // create the user in MongoDB
        const newUser = new user({
            name,
            age,
            username,
            gender,
            email,
            password,
            // : bcryptjs.genSaltSync(10)
        });

        await newUser.save();
        res.send("success");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

module.exports = register;
