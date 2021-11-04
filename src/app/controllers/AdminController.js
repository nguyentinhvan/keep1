
const Infor = require('../models/Infor')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class AdminController {

    quanli(req, res, next) {
        Infor.find({})
            .then(infors => {
                res.render('quan-li', {infors: mutipleMongooseToObject(infors)})
            })
            .catch(next)

    }
    
    chinhsua(req, res, next) {

        Infor.findById(req.params.id)
            .then(infors => {
                res.render('chinh-sua', infors)
            })
            .catch(next)
        


    }

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