
const exp = require('express')
const router = exp.Router()
const progrController = require('../app/controllers/ProgrController')

router.get('/:slug', progrController.show)
router.get('/', progrController.index)

module.exports = router
