const path = require('path')
const imgur = require('imgur-uploader')
const mainpath = path.dirname(require.main.filename)
const Infor = require('../models/Infor')
const fs = require('fs')
const { mutipleMongooseToObject } = require('../../utill/mongoose')
const cloudinary = require('cloudinary')

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

class AdminController {

    getin4(req, res, next) {
        fetch('https://dang-giap-than.herokuapp.com/acdm/getdata')
            .then(respon => {
                console.log(respon)
            })
            .catch()
    }
    // [PUT]
    updata(req, res, next) {
        if (req.query.change) {
            const file = req.files.img
            file.mv(mainpath + '/src/image/' + file.name, (err) => {
                if (err) {
                    console.log('looix' + err)
                }
                else {
                    imgur(fs.readFileSync(mainpath + '/src/image/' + file.name))
                        .then(data => {
                            req.body.nameimg = data.link

                            Infor.findOneAndUpdate( {_id : req.params.id} , req.body)
                                .then( () => {
                                    console.log('aaa')
                                })
                                .catch(next)

                            fs.unlinkSync(mainpath + '/src/image/' + file.name)
                        })
                        .catch()
                }
            })
        }
        else {
            Infor.findOneAndUpdate( {_id : req.params.id} , req.body)
                .then( () => {
                    console.log('bbb')
                })
                .catch(next)
        }
        res.redirect('back')

    }

    // DELETE soft
    delete(req, res, next) {
        Infor.delete({ _id: req.params.id})
            .then(() => {
                res.redirect('back')
            })
            .catch(next)
    }

    // DELETE FORCE
    deleteForce(req, res, next) {
        Promise.all([Infor.findDeleted({_id : req.params.id}), Infor.deleteOne({_id : req.params.id})])
            .then(([ele, delEle]) => {
                try {
                    if (fs.existsSync(`${mainpath}/src/public/imgs/${ele[0].nameimg}`)) {
                        fs.unlink(`${mainpath}/src/public/imgs/${ele[0].nameimg}`, (err) => {}) 
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
        Promise.all([Infor.find({}), Infor.findDeleted({}), Infor.countDocumentsDeleted()])
            .then(([fi, fd, countDel]) => {
                res.render('quan-li', {
                    inffin: mutipleMongooseToObject(fi),
                    infdel: mutipleMongooseToObject(fd),
                    countDel,
                })    
            })
            .catch(() => {})
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
        const file = req.files.img
        console.log(file.mimetype)
        if (file.mimetype.includes('video')) {

            file.mv(mainpath + '/src/' + file.name)
                .then(() => {
                    return cloudinary.v2.uploader.upload(mainpath + '/src/' + file.name, {
                        resource_type: "video",
                        overwrite: true,
                    })
                })
                .then(r => {
                    fs.unlinkSync(mainpath+'/src/' + file.name)
                    console.log(r.url)
                })
                .catch(e=> console.log(e))
        }
        if (file.mimetype.includes('image')) {

            file.mv(mainpath + '/src/' + file.name, (err) => {
                if (err) {
                    console.log('looix' + err)
                }
                else {
                    imgur(fs.readFileSync(mainpath + '/src/' + file.name))
                        .then(data => {
                            req.body.nameimg = data.link
                            Infor.create(req.body)
                            fs.unlinkSync(mainpath + '/src/' + file.name)
                        })
                        .catch()
                }
            })
        }
        res.redirect('back')
    }    
}

module.exports = new AdminController