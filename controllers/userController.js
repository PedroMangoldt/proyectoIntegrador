const data = require('../db/data');

const userController = {
    index: function(req, res) {
        return res.send('Devuelve todos los usuarios');
    },

    nombre: function(req, res) {
        let nombre = req.params.nombre;
        return res.send("Hola " + nombre);
    },

    profile: function(req, res) {

        let usuario = data.usuario;
        let productosDelUsuario = data.productos;

        return res.render('profile', { user: usuario, productos: productosDelUsuario});
    },
    register: function (req, res) {
        res.render('register', {user: data.usuario});
    },
    login: function (req, res) {
        res.render('login', {user: data.usuario});
    },
};
    

module.exports = userController;
