const multer = require('multer')
const fs = require('fs')
const path = require('path')
const mainpath = path.dirname(require.main.filename)

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, `${mainpath}/src/public/imgs`)
    },
    filename: (req, file, cb) => {

        // Delete image when has req.query.change
        if (req.query.change) {
            fs.unlink(`${mainpath}/src/public/imgs/${req.query.name}`, (err) => {})
        }

        var name = Date.now() + '.' + file.originalname.split('.')[1]
        req.body.nameimg = name
        cb(null, name)
    },
})

module.exports = multer({storage: storage})