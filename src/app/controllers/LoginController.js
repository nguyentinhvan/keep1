
const Account = require('../models/Account')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class LoginController {

    index(req,res) {
        res.render('login')
    }

    login(req, res, next) {
        Account.find({username: req.body.username})
            .then( acc => {
                if (acc[0].password == req.body.password) {
                    res.send('login thanh cong')
                }
                else {
                    res.send('mat khau sai')
                }
            })
            .catch(next)
    }
    
}

module.exports = new LoginController
