const router = require("mongoose").Router()
const Location = require("../db/models/location.model")

router.route("/addLocation", async (req, res) => {
    console.log("add location visited")

    res.status(200).json({msg: "location added"})
})


router.route("/removeLocation", async (req, res) => {
    console.log("remove location visited")

    res.status(200).json({msg: "location removed"})
})

module.exports = router