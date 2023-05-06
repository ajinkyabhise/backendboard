let router =  require('express').Router()
let eventContoller = require("../controller/event.controller")

router.post("/add",eventContoller.addEvent)
router.get("/getAll",eventContoller.getAllEvent)
router.delete("/delete/:id",eventContoller.deleteEventById)

module.exports = router