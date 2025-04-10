var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/:id', productController.detalle);

module.exports = router;
