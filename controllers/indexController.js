const data = require('../db/data');
const db = require('../database/models');

//Le cambie el nombre a la cost de indexController y lo hice segun el punto 7 abajo, lo dejo asi por las dudas por si llega a fallar algo para tener la estructura vieja, dsp la borro
const AX = {
    index: function(req, res) {
        return res.render('index', {title: 'Mercado Liebre', productos: data.productos, user: data.usuario});
    }
};

const indexController = {
    index: function(req, res) {
        db.Product.findAll({
            include: [{ association: "usuario" }]
        })
        .then(function(productos) {
            return res.render('index', { productos: productos, user: req.session.user});
        })}
};

module.exports = indexController;
