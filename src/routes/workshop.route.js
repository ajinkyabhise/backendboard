let router =  require('express').Router()
let workshopContoller = require("../controller/workshop.controller")

router.post("/add",workshopContoller.addworkshop)
router.get("/getAll",workshopContoller.getAllworkshop)
router.delete("/delete/:id",workshopContoller.deleteworkshopById)

module.exports = router