let Profile = require("../model/profile.model")

exports.addProfile = async (req, res)=>{
    try {
        await new Profile(req.body).save()
        res.jsonp({
            message :"Profile added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add Profile",
            statusCode:301
        })
    }
}

exports.getAllProfile = async (req, res)=>{
    try {
        const getAllProfile = await Profile.find()
        res.jsonp({
            message :"Profile fetched successfully",
            statusCode:200,
            data : getAllProfile
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Profile",
            statusCode:301
        })
    }
}

exports.getProfileById = async (req, res)=>{
    try {
        const getProfileById = await Profile.findById(req.params.id)
        res.jsonp({
            message :"Profile fetched successfully",
            statusCode:200,
            data : getProfileById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Profile",
            statusCode:301
        })
    }
}

exports.updateProfileById = async (req, res)=>{
    try {
        await Profile.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Profile updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update Profile",
            statusCode:301
        })
    }
}

exports.deleteProfileById = async (req, res)=>{
    try {
        await Profile.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Profile deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete Profile",
            statusCode:301
        })
    }
}