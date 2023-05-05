let mongoose = require('mongoose')

const LogoSchema = new mongoose.Schema({
    url : String,
})

module.exports = mongoose.model('Logo', LogoSchema)