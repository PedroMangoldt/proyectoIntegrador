const data = require('../db/data');

const indexController = {
    index: function(req, res) {
        return res.render('index', {title: 'Mercado Liebre', productos: data.productos, user: data.usuario});
    }
};

module.exports = indexController;
