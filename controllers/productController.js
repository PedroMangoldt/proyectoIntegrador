const data = require('../db/data');

const productController = {
    detalle: function (req, res) {

        const producto = data.productos[4];
        return res.render('product', { producto });
    },
    searchResults: function (req, res) {
        res.render("search-results", {resultados}); 
    },
    add: function (req, res) {
        res.render("product-add");
     }
};

module.exports = productController;
