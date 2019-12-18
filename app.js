const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const errorController = require('./controllers/error')
const app = express()

// pug engine
app.set('view engine', 'pug')
app.set('views', 'views')

const rootDir = require('./util/path')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404Page) 

app.listen(3000)