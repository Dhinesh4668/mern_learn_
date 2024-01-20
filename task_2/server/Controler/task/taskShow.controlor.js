const task = require('../../modals/task.modal')
const ShowTask = async (req, res) => {
    try {
      const listItem = await task.find();
      res.json(listItem);
    } catch (error) {
      console.error(error.message);
    }
}

module.exports = ShowTask