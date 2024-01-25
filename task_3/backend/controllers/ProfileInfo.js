const user = require('../models/userModel')

const ProfileInfo =async (req, res)=>{
    const id = req.params.id;
    try {
        const userData = await user.findById(id);
        res.send(userData);
        console.log(userData);
    } catch (error) {
        console.error(err.message)
    }
}

module.exports = ProfileInfo