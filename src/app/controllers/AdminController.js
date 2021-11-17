
const Infor = require('../models/Infor')
const fs = require('fs')
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

    // DELETE 
    delete(req, res, next) {
        Promise.all([Infor.findById({_id : req.params.id}), Infor.deleteOne({_id : req.params.id})])
        
            .then(([ele, delEle]) => {
                console.log(ele)
                try {
                    if (fs.existsSync(`./src/public/imgs/${ele.nameimg}`)) {
                        fs.unlink(`./src/public/imgs/${ele.nameimg}`, (err) => {}) 
                    }
                } catch (error) {
                    console.log(error)
                }
                
                res.redirect('back')
            })
            .catch(next)
    }

    // VIEW
    quanli(req, res, next) {
        Infor.find({})
            .then(infors => {
                res.render('quan-li', {infors: mutipleMongooseToObject(infors)})
            })
            .catch(next)
    }
    
    // RENDER UpDate
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

    // creat new
    store(req, res, next){       
        Infor.create(req.body)
        res.redirect('back')
    }    
    
}

module.exports = new AdminController