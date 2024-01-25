const user = require("../models/userModel");

const regester = async (req, res) => {
  const { name, age, dob, intrest, profilePic, email, password, gender } =
    req.body;
  try {
    const newUser = new user({
      name,
      age,
      dob,
      intrest,
      profilePic,
      email,
      password,
      gender,
    });
    await newUser.save();
    res.json({
      data: "sucess",
    });
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = regester;
