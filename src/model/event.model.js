let mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title:String,
    date:String,
    location:String,
    targetAudience:String,
    conductor:String,
    description:String,
    contact:String
})

module.exports = mongoose.model('Event', EventSchema)