const data = require('../db/data');
const db = require('../database/models');
const bcrypt = require('bcryptjs');

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
    data: async function (req, res) {
    const { usuario, email, password, fecha_nacimiento } = req.body;

    if (password.length < 3) {
      return res.send("La contraseña debe tener al menos 3 caracteres");
    }

    const usuarioExistente = await db.User.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.send("Ese email ya está registrado");
    }

    await db.User.create({
      usuario,
      email,
      password: bcrypt.hashSync(password, 10),
      fecha_nacimiento
    });

    return res.redirect('/login');
  }
};
    

module.exports = userController;
