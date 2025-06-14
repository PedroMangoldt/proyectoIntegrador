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
      if (!req.session.user) {
        return res.redirect('/users/login')
      }
    let idUsuario = req.session.user.id;

    db.User.findByPk(idUsuario, {
        include: [{ association: "productos" , include:[{association: "comentarios"}]}]
    })
    .then(function(usuario) {
        let productosDelUsuario = usuario.productos;

        return res.render('profile', { user: usuario, productos: productosDelUsuario });
    });
  
    },
    register: function (req, res) {
      if (req.session.user != undefined){
        return res.redirect('/users/profile')
      }
        res.render('register');
        
    },
    login: function (req, res) {
    console.log(req.cookies.userEmail);
    res.render('login', {email: req.cookies.userEmail });
},

   data: function (req, res) {
  if (req.body.contrasenia.length < 3) {
    return res.send("La contraseña debe tener al menos 3 caracteres");
  }

  db.User.findOne({ 
    where: [{ email: req.body.email }] 
})
    .then(function (usuarioExistente) {
      if (usuarioExistente) {
        return res.send("Ese email ya está registrado");
      }
      console.log(req.body);
       db.User.create({
        dni: req.body.dni,
        usuario: req.body.usuario,
        email: req.body.email,
        contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
        fecha_nacimiento: req.body.fecha_nacimiento, 
      })
      .then(function () {
        res.redirect('/users/login');
      })
      .catch(function (error) {
        console.log(error);
        res.send("Ocurrió un error al registrar el usuario");
      });
    })
},
  loginProceso: function (req, res) {
    db.User.findOne({
      where : [{email: req.body.email}]
    })
      .then(function(user) {
        if (!user) {
          return res.render('login', {error:"No existe el usuario"})
      }

      const password = bcrypt.compareSync(req.body.password, user.contrasenia);

      if (!password) {
        return res.render('login', {error:"Contraseña incorrecta"});
      }

      req.session.user = {
        id: user.id,
        name: user.usuario,
        email: user.email
      };

    if (req.body.remember) {
     res.cookie('userEmail', user.email, { maxAge: 1000 * 60 * 5 });
    }
      
      return res.redirect('/');

  })
  .catch(function(error){
    return res.send(error);})
  },
logout: function (req, res) {
    res.clearCookie('userEmail');
    req.session.destroy();
    return res.redirect('/');
  },
  perfil: function (req, res) {
    db.User.findByPk(req.params.id, {
        include: [
            {
                association: "productos",
                include: [{ association: "comentarios" }]
            }
        ]
    })
    .then(function (usuario) {
        if (!usuario) {
            return res.send("Usuario no encontrado");
        }

        res.render("profile", {
            user: usuario,
            productos: usuario.productos
        });
    })
    .catch(function (error) {
        console.log(error);
        res.send("Error al cargar perfil");
    });
  }

}
    
module.exports = userController;
