const user = require('../models/userModel')

const ProfileInfo =async (req, res)=>{
    const id = req.params.id;
    try {
        const userData = await user.findById(id)
        res.send(userData)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = ProfileInfo