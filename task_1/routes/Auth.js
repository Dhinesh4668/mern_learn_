const express = require('express')
const router = express.Router()
const user = require('../modals/userModal')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const register = require('../controler/AuthControler')
const loginController = require('../controler/LoginControler')
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