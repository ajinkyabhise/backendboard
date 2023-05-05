let mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    url : String,
    description : String,
})

module.exports = mongoose.model('Profile', ProfileSchema)