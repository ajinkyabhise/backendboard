let mongoose = require('mongoose')

const ExamTableSchema = new mongoose.Schema({
    title : String,
    class : String,
    table : Array
});

module.exports = mongoose.model('ExamTable', ExamTableSchema)