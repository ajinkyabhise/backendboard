let mongoose = require('mongoose')

const TestimonialSchema = new mongoose.Schema({
    title : String,
    description : String,
    url:String,
    name:String
})

module.exports = mongoose.model('Testimonial', TestimonialSchema)