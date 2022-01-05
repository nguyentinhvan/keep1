
const loginRouter = require('./login')
const progrRouter = require('./progr')
const adminRouter = require('./admin')
const dangkiRouter = require('./dangki')

function route(app) {
    app.use('/login', loginRouter)
    app.use('/dangki', dangkiRouter)
    app.use('/progr', progrRouter)
    app.use('/acdm', adminRouter)
    app.use('/', progrRouter)
}

module.exports = route
