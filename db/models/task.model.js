const mongoose = require("mongoose")
const Schema = mongoose.Schema


const taskSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    desc: {type: String, required: true},
    steps: {type: Array, required: true},
    duration: {type: Number, required: true},
    interval: {type: Number, required: true},
    recurring: {type: Boolean, required: true, default: true},
    special: {type: Boolean, required: true, default: false},
    addedOn: {type: Number, required: true},
    status: {type: Boolean, required: true, default: true},
    inactiveFrom: {type: Number, required: false},
    lastCompletedDate: {type: Number, required: false},
    lastAssignedTo: {type: Number, required: false},
    lastCompletedBy: {type: Number, required: false},
    currentlyAssignedTo: {type: Number, required: true},
    assignmentDateTime: {type: Number, required: true}
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task