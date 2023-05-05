let workshop = require("../model/workshop.model")

exports.addworkshop = async (req, res)=>{
    try {
        await new workshop(req.body).save()
        res.jsonp({
            message :"workshop added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add workshop",
            statusCode:301
        })
    }
}

exports.getAllworkshop = async (req, res)=>{
    try {
        const getAllworkshop = await workshop.find()
        res.jsonp({
            message :"workshop fetched successfully",
            statusCode:200,
            data : getAllworkshop
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched workshop",
            statusCode:301
        })
    }
}

exports.getworkshopById = async (req, res)=>{
    try {
        const getworkshopById = await workshop.findById(req.params.id)
        res.jsonp({
            message :"workshop fetched successfully",
            statusCode:200,
            data : getworkshopById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched workshop",
            statusCode:301
        })
    }
}

exports.updateworkshopById = async (req, res)=>{
    try {
        await workshop.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"workshop updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update workshop",
            statusCode:301
        })
    }
}

exports.deleteworkshopById = async (req, res)=>{
    try {
        await workshop.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"workshop deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete workshop",
            statusCode:301
        })
    }
}