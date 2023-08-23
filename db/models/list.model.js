const mongoose = require("mongoose")
const Schema = mongoose.Schema

const listSchema = new Schema({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    desc: {type: String, required: true},
    associatedLocation: {type: Number, required: true},
    items: {type: Array, required: false}
})

const List = mongoose.model('List', listSchema)

module.export = List