const express = require('express')
const router = express.Router()
const adminController = require('../app/controllers/AdminController')

router.get('/getin4', adminController.getin4)

router.get('/quan-li', adminController.quanli)
router.get('/chinh-sua/:id', adminController.chinhsua)
router.put('/:id',adminController.updata)
router.delete('/:id', adminController.delete)
router.delete('/force/:id', adminController.deleteForce)
router.post('/store' ,adminController.store)
router.get('/', adminController.index)





router.get('/keepserver', (req,res) => {
    res.json('okkk')
})

module.exports = router
