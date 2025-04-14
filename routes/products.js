var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/:id', productController.detalle);
router.get('/resultados-de-busqueda', productController.searchResults);
router.get('/agregar-producto', productController.add);


module.exports = router;
