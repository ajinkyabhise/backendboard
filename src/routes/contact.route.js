let router =  require('express').Router()
let ContactContoller = require("../controller/contact.controller")

router.post("/add",ContactContoller.addContact)
router.get("/getAll",ContactContoller.getAllContact)
router.get("/get/:id",ContactContoller.getContactById)
router.put("/update/:id",ContactContoller.updateContactById)
router.delete("/delete/:id",ContactContoller.deleteContactById)

module.exports = router