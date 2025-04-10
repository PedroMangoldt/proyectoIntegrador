const data = require('../db/data');

const productController = {
  detalle: function (req, res) {
    const id = Number(req.params.id);
    const productos = data.productos;

    for (let i = 0; i < productos.length; i++) {
      if (productos[i].id === id) {
        return res.render('product', { producto: productos[i] });
      }
    }


    return "No se encontró ningún producto";
  }
};

module.exports = productController;
