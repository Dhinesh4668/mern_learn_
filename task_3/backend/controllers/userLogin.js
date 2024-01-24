const user = require("../models/userModel");

const login = async (req, res) => {
  const { email, passsword } = req.body;
  try {
    const isemail = await user.findOne({ email });
    if (!isemail) {
        return res.status(404).json({ error: `User not found "${UserName}." Please check your email.` });
    } else {
      res.send("login sucess");
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = login;
