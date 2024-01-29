const user = require('../models/userModel')

const updateUserProfile = async(req, res)=>{
    const id = req.params.id;
    try {
        const profile = await user.findByIdAndUpdate(id);
        console.log(profile)

          for (const key in req.body) {
            profile[key] = req.body[key];
          }
          if(req.file){
            profile.profilePic = req.file.path;
          }
        await profile.save();
        res.json({ success: true, message: 'User information was updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        console.error(error.message)
    }
}

module.exports = updateUserProfile;