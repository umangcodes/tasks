const Location = require("../db/models/location.model")
const router = require("express").Router()

router.route("/add").post( async (req, res) => {
    try {
        const findLocation = await Location.find({name: req.body.name})
        if(findLocation.length > 0){
            res.status(403).json({msg: "location already exists"})
        }else{
            const newLocation = new Location(req.body)
            const resp = await newLocation.save()
            res.status(200).json({msg: "location created", resp: resp})
        }
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.route("/findAll").get( async(req, res) => {
    try {
        const resp = await Location.find()
        res.status(200).json({details: resp})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})

router.route("/remove").post( async (req, res) => {
    try {
        const findLocation = await Location.find({name: req.body.name})
        if(findLocation.length > 0){
            const resp = await Location.deleteOne({name: req.body.name})
            res.status(200).json({msg: "location removed from the list", resp: resp})
        }else{
            res.status(403).json({msg: "location does not exist"})
        }
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router