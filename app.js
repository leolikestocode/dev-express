const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const expressHbs = require('express-handlebars')
const app = express()

app.engine('hbs', expressHbs())
// app.set('view engine', 'hbs')

// pug engine
app.set('view engine', 'pug')

app.set('views', 'views')

const rootDir = require('./util/path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})

app.listen(3000)