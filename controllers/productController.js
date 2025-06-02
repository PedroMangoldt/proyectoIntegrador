const data = require('../db/data');
const db = require("../database/models")


const productController = {
    detalle: function (req, res) {

        const producto = data.productos[4];
        return res.render('product', { producto });
    },
    searchResults: function (req, res) {
        const busqueda = req.query.search;
        const op = db.Sequelize.Op;

        db.Product.findAll({
            where: {
                nombre: {[op.like]: `%${busqueda}%`}
            },
            include: [{association: "user"}]
        })
        .then(function(productos){
        if(productos.length > 0){
            res.render('search-results', {productos});
        } 
        else {
            res.render("search-results", {productos: [], mensaje: `No se han encontrado resultados para ${busqueda}`})
        }
    })
        .catch(function(error){
            console.log(error);
            res.send("Error al buscar productos")
        })
    },
    add: function (req, res) {
        if (!req.session.user){
            return res.redirect('/users/login');
        }
        return res.render('product-add', {user:req.session.user});
    },
    productSave: function (req, res) {
        if (!req.session.user){
            return res.redirect('/users/login');
        }
    db.Product.create({
        id_usuario: req.session.user.id,
        nombre: req.body.nombreP,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen
        // tenemos que agregar el created at//
    })
    .then(function () {
        res.redirect('/');
      })
      .catch(function (error) {
        console.log(error);
        res.send("Ocurrió un error al cargar el producto");
      });
},
}

module.exports = productController;
