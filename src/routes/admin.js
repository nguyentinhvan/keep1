
const express = require('express')
const router = express.Router()
const adminController = require('../app/controllers/AdminController')

router.get('/quan-li', adminController.quanli)
router.get('/chinh-sua/:id', adminController.chinhsua)
router.get('/', adminController.index)
router.post('/store', adminController.store)

module.exports = router
