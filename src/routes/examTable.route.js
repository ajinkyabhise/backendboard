let router =  require('express').Router()
let examTableContoller = require("../controller/examTable.controller")

router.post("/add",examTableContoller.addExamTable)
router.get("/getAll",examTableContoller.getAllExamTable)
router.delete("/delete/:id",examTableContoller.deleteExamTableById)

module.exports = router