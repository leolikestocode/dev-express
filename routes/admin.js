const express = require('express')
const path = require('path')

const productsFolder = require('../controllers/products')

const router = express.Router()

router.get('/add-product', productsFolder.getAddProduct)

router.post('/add-product', productsFolder.postAddProduct)

module.exports = router;