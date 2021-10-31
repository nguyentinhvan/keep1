
const loginRouter = require('./login')
const progrRouter = require('./progr')
const adminRouter = require('./admin')

function route(app) {
    app.use('/login', loginRouter)
    app.use('/progr', progrRouter)
    app.use('/acdm', adminRouter)
    app.use('/', progrRouter)
}

module.exports = route
