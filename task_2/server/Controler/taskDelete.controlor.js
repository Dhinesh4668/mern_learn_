const task = require('../modals/task.modal')

const deleteTask = async (req, res) => {
    try {
      const deletedTak = await task.findByIdAndDelete(req.params.id);
      // res.json(deletedTak);
      res.send("deleted Sucess......");
    } catch (error) {
      console.error(error.message);
    }
}

module.exports = deleteTask