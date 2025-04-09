const data = require('../db/data');

const productController = {
    detalle: function (req, res) {
        // Por ahora muestro solo un producto para ir probando, dsp lo borro [0] (el primero)
        const producto = data.productos[0];
        return res.render('product', { producto });
    }};

module.exports = productController;
