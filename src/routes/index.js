
const loginRouter = require('./login')
const progrRouter = require('./progr')
const adminRouter = require('./admin')
const dangkiRouter = require('./dangki')
const resAPI = require('./resapi')

function route(app) {
    app.use('/api', resAPI)
    app.use('/login', loginRouter)
    app.use('/dangki', dangkiRouter)
    app.use('/progr', progrRouter)
    app.use('/acdm', adminRouter)
    app.use('/', progrRouter)
}

module.exports = route
