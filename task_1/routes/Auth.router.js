const express = require('express')
const router = express.Router()
const user = require('../modals/user.Modal')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const register = require('../controler/Auth.Controler')
const loginController = require('../controler/Login.Controler')
require('dotenv').config()
// middle ware 
router.use(express.json())


// regester the user 
router.post('/regester', register)


// login
router.post('/login', loginController);

// list the data
router.get('/show', async (req, res) => {
    try {
        const listData = await user.find(); 
        res.json(listData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

module.exports = router;