
const Account = require('../models/Account')
const { mutipleMongooseToObject } = require('../../utill/mongoose')

class DangkiController {

    index(req,res) {
        res.render('dangki')
    }
    
    dangki(req,res,next) {
        Account.find({ username: req.body.username})
            .then( acc => {
                console.log(acc)
                if (acc.length === 1) {
                    res.send('Tên đăng nhập đã được sử dụng')
                }
                else {
                    if (req.body.password == req.body.repassword) {
                        let inforAcc = {
                            username: req.body.username,
                            password: req.body.password,
                        }
                        Account.create(inforAcc)
                            .then(
                                res.redirect('back')        
                            )
                            .catch(next)
                        
                    }
                    else {
                        res.send('Xác thực mật khẩu chưa đúng')
                    }
                }
            })
            .catch(next)
    }
    saveAcc(req) {     
        Account.create(req)
        res.redirect('back')
    }
}

module.exports = new DangkiController
