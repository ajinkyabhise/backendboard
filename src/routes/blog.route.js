let router =  require('express').Router()
let blogContoller = require("../controller/blog.controller")

router.post("/add",blogContoller.addBlog)
router.get("/getAll",blogContoller.getAllBlog)
router.get("/get/:id",blogContoller.getBlogById)
router.put("/update/:id",blogContoller.updateBlogById)
router.delete("/delete/:id",blogContoller.deleteBlogById)

module.exports = router