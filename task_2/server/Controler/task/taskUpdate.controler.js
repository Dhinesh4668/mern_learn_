const task = require('../../modals/task.modal');

const updateTask = async (req, res) => {
  try {
    const updatedTask = await task.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        mobile: req.body.mobile,
      }).then(users => res.send(users))
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateTask;
