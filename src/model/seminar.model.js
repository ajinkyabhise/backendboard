let mongoose = require('mongoose')

const SeminarSchema = new mongoose.Schema({
    title:String,
    date:String,
    location:String,
    presenter:String,
    description:String,
    contact:String
})

module.exports = mongoose.model('Seminar', SeminarSchema)