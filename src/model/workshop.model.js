let mongoose = require('mongoose')

const WorkShopSchema = new mongoose.Schema({
    title:String,
    date:String,
    location:String,
    targetAudience:String,
    conductor:String,
    description:String,
    contact:String
})

module.exports = mongoose.model('Workshop', WorkShopSchema)