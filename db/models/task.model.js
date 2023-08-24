const moment = require("moment")
const {v4:uuidv4} = require("uuid")
const mongoose = require("mongoose")
const Schema = mongoose.Schema


const taskSchema = new Schema({
    id: {type: String, required: false, default:uuidv4() },
    name: {type: String, required: true},
    desc: {type: String, required: true},
    steps: {type: Array, required: false, default: []},
    duration: {type: Number, required: true},
    interval: {type: Number, required: true},
    recurring: {type: Boolean, required: false, default: true},
    special: {type: Boolean, required: false, default: false},
    addedOn: {type: String, required: false, default: moment().clone().format("YYYYMMDDHHmmss")},
    status: {type: Boolean, required: false, default: true},
    inactiveFrom: {type: String, required: false},
    lastCompletedDate: {type: Number, required: false},
    lastAssignedTo: {type: Number, required: false},
    lastCompletedBy: {type: Number, required: false},
    currentlyAssignedTo: {type: Number, required: false},
    assignmentDateTime: {type: Number, required: false},
    association: {type: Object, required: false},
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task