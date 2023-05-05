let router =  require('express').Router()
let holidayContoller = require("../controller/holiday.controller")

router.post("/add",holidayContoller.addholiday)
router.get("/getAll",holidayContoller.getAllholiday)

module.exports = router