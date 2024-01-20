const task = require('../../modals/task.modal')
const showById = async (req,res)=>{
    const id = req.params.id;
    task.findById({_id: id}).then(users => res.send(users)).catch(err => res.send(err.message))
}

module.exports = showById