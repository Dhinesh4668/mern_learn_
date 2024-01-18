const express = require("express");
const createTask = require("../Controler/taskCreate.controlor");
const updateTask = require("../Controler/taskUpdate.controler");
const ShowTask = require("../Controler/taskShow.controlor");
const deleteTask = require("../Controler/taskDelete.controlor");
const router = express.Router();

// show the datas
router.get("/get", ShowTask);

// update
router.put("/update/:id", updateTask);

// delete
router.delete("/delete/:id", deleteTask);
// create the data
router.post("/create", createTask);

module.exports = router;
