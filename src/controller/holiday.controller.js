let holiday = require("../model/holiday.model")

exports.addholiday = async (req, res)=>{
    try {
        await new holiday(req.body).save()
        res.jsonp({
            message :"holiday added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add holiday",
            statusCode:301
        })
    }
}

exports.getAllholiday = async (req, res)=>{
    try {
        const getAllholiday = await holiday.find()
        res.jsonp({
            message :"holiday fetched successfully",
            statusCode:200,
            data : getAllholiday
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched holiday",
            statusCode:301
        })
    }
}

exports.getholidayById = async (req, res)=>{
    try {
        const getholidayById = await holiday.findById(req.params.id)
        res.jsonp({
            message :"holiday fetched successfully",
            statusCode:200,
            data : getholidayById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched holiday",
            statusCode:301
        })
    }
}

exports.updateholidayById = async (req, res)=>{
    try {
        await holiday.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"holiday updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update holiday",
            statusCode:301
        })
    }
}

exports.deleteholidayById = async (req, res)=>{
    try {
        await holiday.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"holiday deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete holiday",
            statusCode:301
        })
    }
}