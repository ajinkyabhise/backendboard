let Contact = require("../model/contact.model")

exports.addContact = async (req, res)=>{
    try {
        await new Contact(req.body).save()
        res.jsonp({
            message :"Contact added successfully",
            statusCode:201
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to add Contact",
            statusCode:301
        })
    }
}

exports.getAllContact = async (req, res)=>{
    try {
        const getAllContact = await Contact.find()
        res.jsonp({
            message :"Contact fetched successfully",
            statusCode:200,
            data : getAllContact
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Contact",
            statusCode:301
        })
    }
}

exports.getContactById = async (req, res)=>{
    try {
        const getContactById = await Contact.findById(req.params.id)
        res.jsonp({
            message :"Contact fetched successfully",
            statusCode:200,
            data : getContactById
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to fetched Contact",
            statusCode:301
        })
    }
}

exports.updateContactById = async (req, res)=>{
    try {
        await Contact.findByIdAndUpdate(req.params.id, req.body)
        res.jsonp({
            message :"Contact updated successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to update Contact",
            statusCode:301
        })
    }
}

exports.deleteContactById = async (req, res)=>{
    try {
        await Contact.findByIdAndDelete(req.params.id)
        res.jsonp({
            message :"Contact deleted successfully",
            statusCode:201,
        })
    } catch (error) {
        res.jsonp({
            message :"Unable to delete Contact",
            statusCode:301
        })
    }
}