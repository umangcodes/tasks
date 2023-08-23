const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    manager: {type: String, required: true},
    lists: {type: Array, required: false}
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location