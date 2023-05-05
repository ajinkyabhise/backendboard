let Logo = require("../model/logo.model")

exports.addLogo = async (req, res)=>{
    try {
        await new Logo(req.body).save()
        res.jsonp({
            message :"Logo added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add Logo",
            statusCode:301
        })
    }
}

exports.getAllLogo = async (req, res)=>{
    try {
        const getAllLogo = await Logo.find()
        res.jsonp({
            message :"Logo fetched successfully",
            statusCode:200,
            data : getAllLogo
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Logo",
            statusCode:301
        })
    }
}

exports.getLogoById = async (req, res)=>{
    try {
        const getLogoById = await Logo.findById(req.params.id)
        res.jsonp({
            message :"Logo fetched successfully",
            statusCode:200,
            data : getLogoById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Logo",
            statusCode:301
        })
    }
}

exports.updateLogoById = async (req, res)=>{
    try {
        await Logo.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Logo updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update Logo",
            statusCode:301
        })
    }
}

exports.deleteLogoById = async (req, res)=>{
    try {
        await Logo.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Logo deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete Logo",
            statusCode:301
        })
    }
}