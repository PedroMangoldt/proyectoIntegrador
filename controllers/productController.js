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
        res.render("product-add");
    },
    
};

module.exports = productController;
