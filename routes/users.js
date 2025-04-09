var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.get('/profile', userController.profile);

module.exports = router;