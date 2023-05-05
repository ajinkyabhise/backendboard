let mongoose = require('mongoose')

const HolidaySchema = new mongoose.Schema({
    title:String,
    date:String,
    month:String
})

module.exports = mongoose.model('Holiday', HolidaySchema)