const data = require('../db/data');
const db = require('../database/models');

const indexController = {
    index: function(req, res) {
        return res.render('index', {title: 'Mercado Liebre', productos: data.productos, user: data.usuario});
    }
};

module.exports = indexController;
