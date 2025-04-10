const express = require("express")
const router = express.Router()
const productAddController = require("../controllers/productaddController")


router.get('/', productAddController.detalle)

module.exports = router;