const express = require("express")
const route = express.Router()
const loginController = require("../controllers/loginController")

router.get("/", loginController.login)

module.exports = route