
const Infor = require('../models/Infor')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class AdminController {

    
    index(req,res, next) {
        res.render("admin")
    }
    store(req, res, next) {
        const infor = new Infor(req.body)
        infor.save()
        res.render('admin')
    }
}

module.exports = new AdminController