
const express = require('express')
const router = express.Router()
const dangkiController = require('../app/controllers/DangkiController')

router.post('/post', dangkiController.dangki)
router.get('/', dangkiController.index)

module.exports = router
