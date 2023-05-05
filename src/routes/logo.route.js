let router =  require('express').Router()
let LogoContoller = require("../controller/logo.controller")

router.post("/add",LogoContoller.addLogo)
router.get("/getAll",LogoContoller.getAllLogo)
router.get("/get/:id",LogoContoller.getLogoById)
router.put("/update/:id",LogoContoller.updateLogoById)
router.delete("/delete/:id",LogoContoller.deleteLogoById)

module.exports = router