const data = require('../db/data');

const userController = {
    index: function(req, res) {
        return res.send('Devuelve todos los usuarios');
    },
    nombre: function(req,res) {
        let nombre = req.params.nombre;
        return res.send("Hola " + nombre)
    },
    profile: function(req, res) { 
        return res.render('profile', { user: data.usuario });
}

}

module.exports = userController

