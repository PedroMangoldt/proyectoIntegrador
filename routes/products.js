var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

router.get('/detalle/:id', productController.detalle);
router.get('/search-results', productController.searchResults);
router.get('/productadd', productController.add);
router.post('/productadd', productController.productSave);
router.post('/detalle/:id/comentario', productController.saveComment);



module.exports = router;
