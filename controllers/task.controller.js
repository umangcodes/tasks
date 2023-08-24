const router = require("express").Router()
const Task = require("../db/models/task.model")
router.route("/all").get(async (req, res) => {
    try {

        res.status(200).json({msg: "all tasks"})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.route("/add").post(async (req, res) => {
    try {
        const addTask = new Task(req.body)
        const resp = addTask.save()
        res.status(200).json({msg: "task created", resp: resp})

    } catch (error) {
        res.status(500).json({msg: error})
    }
})


module.exports = router