
const express = require('express')
const router = express.Router()
const resAPI = require('../app/controllers/ResAPI')

router.post('/upload/image', resAPI.uploadimg)
router.get('/', resAPI.index)

module.exports = router
