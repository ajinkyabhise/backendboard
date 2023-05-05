let Blog = require("../model/blog.model")

exports.addBlog = async (req, res)=>{
    try {
        await new Blog(req.body).save()
        res.jsonp({
            message :"Blog added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add blog",
            statusCode:301
        })
    }
}

exports.getAllBlog = async (req, res)=>{
    try {
        const getAllBlog = await Blog.find()
        res.jsonp({
            message :"Blog fetched successfully",
            statusCode:200,
            data : getAllBlog
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched blog",
            statusCode:301
        })
    }
}

exports.getBlogById = async (req, res)=>{
    try {
        const getBlogById = await Blog.findById(req.params.id)
        res.jsonp({
            message :"Blog fetched successfully",
            statusCode:200,
            data : getBlogById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched blog",
            statusCode:301
        })
    }
}

exports.updateBlogById = async (req, res)=>{
    try {
        await Blog.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Blog updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update blog",
            statusCode:301
        })
    }
}

exports.deleteBlogById = async (req, res)=>{
    try {
        await Blog.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Blog deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete blog",
            statusCode:301
        })
    }
}