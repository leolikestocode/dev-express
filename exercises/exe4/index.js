const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

// pug engine
app.set('view engine', 'pug')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

const data = []

app.get('/', (req, res) => {

    res.render('index', {da: data, docTitle: 'index'})
})

app.get('/add', (req, res) => {
    res.send(`
        <form action="/add" method="POST">
            <input type="text" name="data"/>
            <button type="submit">botão</button>
        </form>
    `)
})

app.post('/add', (req, res) => {
    data.push({data: req.body.data})
    res.redirect('/')
})

app.listen(3000)