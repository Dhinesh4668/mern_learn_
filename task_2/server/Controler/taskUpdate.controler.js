const task = require('../modals/task.modal')
const updateTask = async (req, res) => {
    try {
      const updateTask = await task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(updateTask);
      console.log("update sucess");
    } catch (error) {
      console.error(error.message);
      res.status(500).json(error.message);
    }
}

module.exports = updateTask