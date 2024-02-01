const express = require("express");
const router = express.Router();
const User = require("../models/userModal/UserModal");
// user regester api
router.post("/regester", async (req, res) => {
  try {
    const { name, age, gender, email, password } = req.body;
    const newUser = new User({
      name,
      age,
      gender,
      email,
      password,
    });
    await newUser.save();
    res.status(200).send({ Sucess: true, message: "Sucess",data: newUser });
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
module.exports = router;
