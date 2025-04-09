const express = require("express")
const route = express.Router()
const indexController = require("../controllers/indexController")

router.get("/", indexController.index)

module.exports = route
