
const Infor = require('../models/Infor')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class AdminController {

    // [PUT]
    updata(req, res, next) {
        Infor.findOneAndUpdate( {_id : req.params.id} , req.body)
            .then( () => {
                res.redirect('/acdm/quan-li')
            })
            .catch(next)
    }

    delete(req, res, next) {
        Infor.deleteOne({_id : req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
        
    }

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