let Testimonial = require("../model/testimonial.model")

exports.addTestimonial = async (req, res)=>{
    try {
        await new Testimonial(req.body).save()
        res.jsonp({
            message :"Testimonial added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add Testimonial",
            statusCode:301
        })
    }
}

exports.getAllTestimonial = async (req, res)=>{
    try {
        const getAllTestimonial = await Testimonial.find()
        res.jsonp({
            message :"Testimonial fetched successfully",
            statusCode:200,
            data : getAllTestimonial
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Testimonial",
            statusCode:301
        })
    }
}

exports.getTestimonialById = async (req, res)=>{
    try {
        const getTestimonialById = await Testimonial.findById(req.params.id)
        res.jsonp({
            message :"Testimonial fetched successfully",
            statusCode:200,
            data : getTestimonialById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Testimonial",
            statusCode:301
        })
    }
}

exports.updateTestimonialById = async (req, res)=>{
    try {
        await Testimonial.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Testimonial updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update Testimonial",
            statusCode:301
        })
    }
}

exports.deleteTestimonialById = async (req, res)=>{
    try {
        await Testimonial.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Testimonial deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete Testimonial",
            statusCode:301
        })
    }
}