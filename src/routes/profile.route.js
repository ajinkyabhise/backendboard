let router =  require('express').Router()
let ProfileContoller = require("../controller/profile.controller")

router.post("/add",ProfileContoller.addProfile)
router.get("/getAll",ProfileContoller.getAllProfile)
router.get("/get/:id",ProfileContoller.getProfileById)
router.put("/update/:id",ProfileContoller.updateProfileById)
router.delete("/delete/:id",ProfileContoller.deleteProfileById)

module.exports = router