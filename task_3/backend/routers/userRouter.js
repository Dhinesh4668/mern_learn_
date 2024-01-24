const express = require('express');
const regester = require('../controllers/userRegester');
const getData = require('../controllers/getData');
const user = require('../models/userModel');
const User = require('../models/userModel');
const updateUserProfile = require('../controllers/updateProfileData');
const router = express.Router();
const multer = require('multer')
const path = require('path')

// update the image
const updatePic = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'assets/avathor')
    },

    // filename
    filename: (req, file, cb) =>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})


const upload = multer({storage: updatePic})


router.post('/user/regester',regester)

router.get('/user/show', getData)
// router.post('/user/login', login) , 

router.patch('/user/:id',upload.single('profilePic'),updateUserProfile)
module.exports = router;