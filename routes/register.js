const express = require("express")
const route = express.Router()
const registerController = require("../controllers/registerController")

router.get("/", registerController.register)

module.exports = route