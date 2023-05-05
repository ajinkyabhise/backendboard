let router =  require('express').Router()
let eventContoller = require("../controller/event.controller")

router.post("/add",eventContoller.addEvent)
router.get("/getAll",eventContoller.getAllEvent)

module.exports = router