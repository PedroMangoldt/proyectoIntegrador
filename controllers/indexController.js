const data = require('../db/data');
const db = require('../database/models');

const indexController = {
    index: function(req, res) {
        db.Product.findAll({
            include: [{ association: "usuario"},  {association:"comentarios"}]
        })
        .then(function(productos) {
            return res.render('index', { productos: productos, user: req.session.user});
        })
        .catch(function (error) {
            console.log(error);
            res.send("Ocurrió un error al mostrar los productos");
          })
        }

};

module.exports = indexController;
