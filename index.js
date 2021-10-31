const path = require('path')
const express = require('express')
//const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./src/routes')
const db = require('./src/config/db')

db.connect()

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'src','public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
//app.use(morgan('dev'))

app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src','resources','views'))

route(app)

app.listen(process.env.PORT || port)