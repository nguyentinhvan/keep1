const res = require("express/lib/response")


class ResAPI {

    //POST
    uploadimg(req, res) {
        
        const file = req.files.img
    }

    // GET
    index(req, res) {
        res.json('Hello')
    }
}

module.exports = new ResAPI
