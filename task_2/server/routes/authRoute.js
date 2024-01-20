const express = require('express');
const user = require('../modals/user.modal');
const router = express.Router();

router.post("/login", async(req, res)=>{
  const {email, name, avathor} = req.body;

  const newUser = new user({
    name,
    email,
    avathor
  })
  await newUser.save()

  res.status(201).json({message: "User information saved successfully"})
})

module.exports = router;