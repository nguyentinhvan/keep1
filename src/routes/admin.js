const upload = require('../app/middlewera/upload')
const express = require('express')
const router = express.Router()
const adminController = require('../app/controllers/AdminController')

router.get('/getin4', adminController.getin4)

router.get('/quan-li', adminController.quanli)
router.get('/chinh-sua/:id', adminController.chinhsua)
router.put('/:id', upload.single('img') ,adminController.updata)
router.delete('/:id', adminController.delete)
router.delete('/force/:id', adminController.deleteForce)
router.post('/store', upload.single('img') ,adminController.store)
router.get('/', adminController.index)

module.exports = router
