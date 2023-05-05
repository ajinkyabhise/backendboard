let router =  require('express').Router()
let TestimonialContoller = require("../controller/testimonial.controller")

router.post("/add",TestimonialContoller.addTestimonial)
router.get("/getAll",TestimonialContoller.getAllTestimonial)
router.get("/get/:id",TestimonialContoller.getTestimonialById)
router.put("/update/:id",TestimonialContoller.updateTestimonialById)
router.delete("/delete/:id",TestimonialContoller.deleteTestimonialById)

module.exports = router