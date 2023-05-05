let mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name : String,
    email : String,
    number : String,
    objection : String,
})

module.exports = mongoose.model('Contact', ContactSchema)