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
})

router.route("/remove").post(async (req ,res) => {
    try {
        const resp = await User.deleteOne({email : req.body.email})
        console.log(resp)
        res.status(200).json({msg: "removed", removed: resp})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.route("/updateUser").post(async (req ,res) => {
    // const resp = await User.updateOne({email: req.body.email},{req.body})
    // on success
    res.status(200).json({msg: "user updated"})
})

router.route("/promoteToAdmin").post(async (req ,res) => {
    const resp = await User.updateOne({email: req.body.email},{admin: true})
    // on success
    res.status(200).json({msg: `promoted ${req.body.email}`, resp : resp})
})

router.route("/demote").post(async (req ,res) => {
    const resp = await User.updateOne({email: req.body.email},{admin: false})
    // on success
    res.status(200).json({msg: `demoted ${req.body.email}`, resp : resp})
})


module.exports = router