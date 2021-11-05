const path = require('path')
const express = require('express')
//const morgan = require('morgan')
const handlebars = require('express-handlebars')
const route = require('./src/routes')
const db = require('./src/config/db')
var methodOverride = require('method-override')

db.connect()

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'src','public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
//app.use(morgan('dev'))

app.use(methodOverride('_method'))

app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b
    },
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src','resources','views'))

route(app)

app.listen(process.env.PORT || port, ()=> {console.log("Start server success")})