const data = require('../db/data');

const productController = {
    detalle: function (req, res) {

        const producto = data.productos[4];
        return res.render('product', { producto });
    }};

module.exports = productController;
