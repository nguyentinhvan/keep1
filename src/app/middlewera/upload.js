const multer = require('multer')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, `${__dirname}/../../public/imgs`)
    },
    filename: (req, file, cb) => {

        // Delete image when has req.query.change
        if (req.query.change) {
            fs.unlink(`${__dirname}/../../public/imgs/${req.query.name}`, (err) => {})
        }

        var name = Date.now() + '.' + file.originalname.split('.')[1]
        req.body.nameimg = name
        cb(null, name)
    },
})

module.exports = multer({storage: storage})