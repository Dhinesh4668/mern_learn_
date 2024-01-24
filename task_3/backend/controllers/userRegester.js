const user = require("../models/userModel");

const regester = async (req, res) => {
  const { name, age, dob, intrest, profilePic, email, password } = req.body;
  try {
    const newUser = new user({
        name, age, dob, intrest, profilePic, email, password
    });
    await newUser.save();
    res.json({
        data: "sucess"
    })
  } catch (error) {
    console.error(error.message)
  }
};

module.exports = regester