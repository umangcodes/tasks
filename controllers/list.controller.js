const router = require("express").Router()

router.route("/addList").post(async (req, res) => {
    console.log("list added")

    res.status(200).json({msg: "list added"})
})

router.route("/removeList").post(async (req, res) => {
    console.log("list removed")

    res.status(200).json({msg: "list removed"})
})