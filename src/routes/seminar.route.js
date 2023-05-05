let router =  require('express').Router()
let seminarContoller = require("../controller/seminar.controller")

router.post("/add",seminarContoller.addSeminar)
router.get("/getAll",seminarContoller.getAllSeminar)

module.exports = router