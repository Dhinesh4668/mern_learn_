const task = require("../../modals/task.modal");

const createTask = async (req, res) => {
    const { name, age, email, mobile } = req.body;
    try {
      const newTask = new task({
        name,
        age,
        email,
        mobile,
      });
      await newTask.save();
      res.status(200).send("add details sucess");
    } catch (err) {
      console.error(err.message);
      res.status(500).send(err.message);
    }
}

module.exports = createTask;