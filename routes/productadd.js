const express = require("express")
const route = express.Router()
const productaddController = require("../controllers/productaddController")

router.get("/", productaddController.productadd)

module.exports = route