const express = require('express')
const router = express.Router();


router.post('/user/regester',(req,res)=>{
    res.send("userReg")
})

router.get('/user/:id', (req,res)=>{
    res.send(`${id}`)
})


router.patch('/user/:id',(req,res)=>{
    res.send('update induguial')
})

module.exports = router;