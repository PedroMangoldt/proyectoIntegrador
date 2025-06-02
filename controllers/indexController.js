const data = require('../db/data');
const db = require('../database/models');

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
