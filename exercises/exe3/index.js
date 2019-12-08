const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'first.html'))
})

app.get('/second', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'second.html'))
})

app.listen(3000)