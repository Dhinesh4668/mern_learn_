const user = require('../../models/userModel')

const ProfileUpdate = async (req, res) =>{
    const {id} = req.params.id;
    try {
        const update = await user.findByIdAndUpdate(id)
        for(const key in req.body){
            update[key]= req.body[key]
        }
        await update.save();
        res.status(200).send({sucess: true, data: {update}})
    } catch (err) {
        res.send(err.message)    
    }
}

module.exports = ProfileUpdate