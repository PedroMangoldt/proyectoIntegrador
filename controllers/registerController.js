const { usuario } = require("../db/data");

const registerController = {
    register: function (req, res) {
      res.render('register', {user: usuario});
    }
  };
  
  module.exports = registerController;
  