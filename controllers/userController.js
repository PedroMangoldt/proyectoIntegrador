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
   data: function (req, res) {
  if (req.body.password.length < 3) {
    return res.send("La contraseña debe tener al menos 3 caracteres");
  }

  db.User.findOne({ 
    where: [{ email: req.body.email }] 
})
    .then(function (usuarioExistente) {
      if (usuarioExistente) {
        return res.send("Ese email ya está registrado");
      }

      return db.User.create({
        usuario: req.body.usuario,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        fecha_nacimiento: req.body.fecha_nacimiento
      });
    })
    .then(function () {
      res.redirect('/users/login');
    })
    .catch(function (error) {
      console.log(error);
      res.send("Ocurrió un error al registrar el usuario");
    });
},
  loginProceso: async function (req, res) {
    const { email, password, recordarme } = req.body;

    const usuario = await db.User.findOne({ where: { email } });

    if (usuario) {
        const validPassword = bcrypt.compareSync(password, usuario.password);

        if (validPassword) {
            req.session.usuarioLogueado = usuario;

            if (recordarme) {
                res.cookie('userEmail', email, { maxAge: 1000 * 60 * 5 });
            }

            return res.redirect('/users/profile');
        }

        return res.send("La contraseña es incorrecta");
    }

    return res.send("Ese email no está registrado");
}


};
    

module.exports = userController;
