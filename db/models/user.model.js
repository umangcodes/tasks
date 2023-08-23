const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    admin: {type: Boolean, required: false, default:false},
    addedOn: {type: String, required: true},
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