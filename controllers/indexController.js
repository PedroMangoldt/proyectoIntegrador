const data = require('../db/data');

const indexController = {
    index: function(req, res) {
        return res.render('index', {title: 'Mercado Libre', productos: data.productos });
    }};

module.exports = indexController;
