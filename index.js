const path = require('path')
const express = require('express')
require('dotenv').config()
const fileupload = require('express-fileupload')
const app = express()
const port = process.env.PORT || 3000

const handlebars = require('express-handlebars')
var methodOverride = require('method-override')

const route = require('./src/routes')
const db = require('./src/config/db')

db.connect()

app.use(express.static(path.join(__dirname, 'src','public')))
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(methodOverride('_method'))
app.use(fileupload())

app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a,b) => a+b,
    },

}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src','resources','views'))

route(app)


const job = require('./src/utill/keepserver')


app.listen(port, ()=> {console.log("Start server success")})