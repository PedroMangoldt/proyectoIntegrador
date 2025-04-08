const userController = {
    index: function(req, res) {
        return res.send('Devuelve todos los usuarios');
    },
    nombre: function(req,res) {
        let nombre = req.params.nombre;
        return res.send("Hola " + nombre)
    }
}

module.exports = userController