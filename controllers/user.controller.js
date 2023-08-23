const User = require("../db/models/user.model.js")
const router = require('express').Router()


router.route("/add").post(async (req ,res) => {
    console.log(req.body)
    try {
        const newUser = new User(req.body)
        const resp = await newUser.save()
        res.status(200).json({msg: "success", added: resp})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }
    
    console.log("Add user visited")
    // on success
})

router.route("/remove").post(async (req ,res) => {
    console.log("user removed")
    // on success
    res.status(200).json({msg: "user Removed"})
})

// router.route("/updateUser").update(async (req ,res) => {
//     console.log("User Updated")
//     // on success
//     res.status(200).json({msg: "user updated"})
// })

// router.route("/promoteToAdmin").update(async (req ,res) => {
//     console.log("Promoted")
//     // on success
//     res.status(200).json({msg: "promoted"})
// })


module.exports = router