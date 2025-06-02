var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

const userController = require('../controllers/userController');

router.get('/profile', userController.profile);
router.get('/register', userController.register);
router.get('/login', userController.login);
router.post('/register', userController.data)
router.post('/login', userController.loginProceso);
router.get('/logout', userController.logout);
router.get('/perfil/:id', userController.perfil);





module.exports = router;