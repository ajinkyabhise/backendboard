let router =  require('express').Router()
let holidayContoller = require("../controller/holiday.controller")

router.post("/add",holidayContoller.addholiday)
router.get("/getAll",holidayContoller.getAllholiday)
router.delete("/delete/:id",holidayContoller.deleteholidayById)


module.exports = router