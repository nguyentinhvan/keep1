const Infor = require('../models/Infor')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class ProgrController {

    index(req, res, next) {
        Infor.find({})
            .then(infors => {
                res.render('progr', {infors: mutipleMongooseToObject(infors)})
            })
            .catch(next)
    }
    show(req, res, next) {
        Infor.findOne({slug: req.params.slug})
            .then(infor => {
                res.json(infor)
            })
            .catch(next)
    }
}

module.exports = new ProgrController