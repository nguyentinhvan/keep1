
class LoginController {

    // [GET] /search
    index(req,res) {
        res.render('login')
    }
    
}

module.exports = new LoginController
