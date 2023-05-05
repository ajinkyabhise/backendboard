let Seminar = require("../model/seminar.model")

exports.addSeminar = async (req, res)=>{
    try {
        await new Seminar(req.body).save()
        res.jsonp({
            message :"Seminar added successfully ",
            statusCode:200
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add Seminar",
            statusCode:301
        })
    }
}

exports.getAllSeminar = async (req, res)=>{
    try {
        const getAllSeminar = await Seminar.find()
        res.jsonp({
            message :"Seminar fetched successfully",
            statusCode:200,
            data : getAllSeminar
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Seminar",
            statusCode:301
        })
    }
}

exports.getSeminarById = async (req, res)=>{
    try {
        const getSeminarById = await Seminar.findById(req.params.id)
        res.jsonp({
            message :"Seminar fetched successfully",
            statusCode:200,
            data : getSeminarById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Seminar",
            statusCode:301
        })
    }
}

exports.updateSeminarById = async (req, res)=>{
    try {
        await Seminar.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Seminar updated successfully",
            statusCode:200,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update Seminar",
            statusCode:301
        })
    }
}

exports.deleteSeminarById = async (req, res)=>{
    try {
        await Seminar.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Seminar deleted successfully",
            statusCode:200,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete Seminar",
            statusCode:301
        })
    }
}