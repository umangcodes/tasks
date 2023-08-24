const mongoose = require('mongoose')
const {v4:uuidv4} = require("uuid")
const moment = require("moment")
const Schema = mongoose.Schema
const userSchema = new Schema({
    id: {type: String, required: false, default: uuidv4()},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    admin: {type: Boolean, required: false, default:false},
    addedOn: {type: String, required: false, default: moment().clone().format("YYYYMMDD")},
    active: {type: Boolean, required: false, default: true},
    stats: {
        avgCompletionTime: {type: Number, required: true, default: 0},
        missed: {type: Number, required: true, default: 0},
        vigilance: {type: Number, required: true, default: 0},
        proactive: {type: Number, required: true, default: 0},
        tempsAssigned: {type: Number, required: true, default: 0}
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User