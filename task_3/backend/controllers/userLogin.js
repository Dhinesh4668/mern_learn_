const user = require('../models/userModel')

const login = async (req,res)=>{
    const {email , passsword} = req.body;
    try {
        const user = await user.findOne({ email });
    } catch (err) {
        
    }
}

module.exports = login