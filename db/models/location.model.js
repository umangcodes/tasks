const mongoose = require('mongoose')
const {v4:uuidv4} = require("uuid")
const moment = require("moment")
const Schema = mongoose.Schema


const locationSchema = new Schema({
    id: {type: String, required: false, default: uuidv4()},
    name: {type: String, required: true},
    manager: {type: Object, required: true},
    lists: {type: Array, required: false},
    addedOn: {type:String, required:false, default: moment().clone().format("YYYYMMDD")}
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location