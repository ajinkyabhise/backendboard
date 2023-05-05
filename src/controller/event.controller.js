let Event = require("../model/event.model")

exports.addEvent = async (req, res)=>{
    try {
        await new Event(req.body).save()
        res.jsonp({
            message :"Event added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add Event",
            statusCode:301
        })
    }
}

exports.getAllEvent = async (req, res)=>{
    try {
        const getAllEvent = await Event.find()
        res.jsonp({
            message :"Event fetched successfully",
            statusCode:200,
            data : getAllEvent
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Event",
            statusCode:301
        })
    }
}

exports.getEventById = async (req, res)=>{
    try {
        const getEventById = await Event.findById(req.params.id)
        res.jsonp({
            message :"Event fetched successfully",
            statusCode:200,
            data : getEventById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Event",
            statusCode:301
        })
    }
}

exports.updateEventById = async (req, res)=>{
    try {
        await Event.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Event updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update Event",
            statusCode:301
        })
    }
}

exports.deleteEventById = async (req, res)=>{
    try {
        await Event.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Event deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete Event",
            statusCode:301
        })
    }
}