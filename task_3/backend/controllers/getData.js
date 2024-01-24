const user = require('../models/userModel')

const getData = async (req,res)=>{
    try{
        const listData = await user.find();
        res.json({
            "data":"sucess",
            listData
        })
    }catch(err){
        console.error(err.message);
        res.json({
            message: err.message
        })
    }
}

module.exports = getData;