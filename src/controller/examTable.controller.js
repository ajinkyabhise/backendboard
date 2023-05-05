let ExamTable = require("../model/examTable.model")

exports.addExamTable = async (req, res)=>{
    try {
        await new ExamTable(req.body).save()
        res.jsonp({
            message :"ExamTable added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add ExamTable",
            statusCode:301
        })
    }
}

exports.getAllExamTable = async (req, res)=>{
    try {
        const getAllExamTable = await ExamTable.find()
        res.jsonp({
            message :"ExamTable fetched successfully",
            statusCode:200,
            data : getAllExamTable
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched ExamTable",
            statusCode:301
        })
    }
}

exports.getExamTableById = async (req, res)=>{
    try {
        const getExamTableById = await ExamTable.findById(req.params.id)
        res.jsonp({
            message :"ExamTable fetched successfully",
            statusCode:200,
            data : getExamTableById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched ExamTable",
            statusCode:301
        })
    }
}

exports.updateExamTableById = async (req, res)=>{
    try {
        await ExamTable.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"ExamTable updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update ExamTable",
            statusCode:301
        })
    }
}

exports.deleteExamTableById = async (req, res)=>{
    try {
        await ExamTable.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"ExamTable deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete ExamTable",
            statusCode:301
        })
    }
}