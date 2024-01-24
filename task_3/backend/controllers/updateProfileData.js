const user = require('../models/userModel')

const updateUserProfile = async(req, res)=>{
    const id = req.params.id;
    // user.findById({_id: id}).then(users => res.send(users)).catch(err => res.send(err.message))
    try {
        const profile = await user.findById(id);
        // update the specific details from the user in dynomicaly
        if (req.file) {
            profile.profilePic.data = req.file.buffer;
            profile.profilePic.contentType = req.file.mimetype;
          }
      
          // Update other fields from the request body
          for (const key in req.body) {
            if (key !== 'profilePic') {
              profile[key] = req.body[key];
            }
          }
      
        await profile.save();
        res.json({ success: true, message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

module.exports = updateUserProfile;