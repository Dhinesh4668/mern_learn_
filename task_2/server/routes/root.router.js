const express = require("express");
const createTask = require("../Controler/task/taskCreate.controlor");
const updateTask = require("../Controler/task/taskUpdate.controler");
const ShowTask = require("../Controler/task/taskShow.controlor");
const deleteTask = require("../Controler/task/taskDelete.controlor");
const showById = require("../Controler/task/taskShowID.controlor");
const router = express.Router();

// show the datas
router.get("/get", ShowTask);

// show by id
router.get("/get/:id", showById)

// update
router.put("/update/:id", updateTask);

// delete
router.delete("/delete/:id", deleteTask);
// create the data
router.post("/create", createTask);

module.exports = router;
