
const express = require('express')
const router = express.Router()
const adminController = require('../app/controllers/AdminController')

router.get('/quan-li', adminController.quanli)
router.get('/chinh-sua/:id', adminController.chinhsua)
router.put('/:id', adminController.updata)
router.delete('/:id', adminController.delete)
router.get('/', adminController.index)
router.post('/store', adminController.store)

module.exports = router
