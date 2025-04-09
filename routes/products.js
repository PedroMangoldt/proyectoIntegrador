var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/product', productController.detalle);

module.exports = router;
