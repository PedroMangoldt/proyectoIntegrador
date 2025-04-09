const express = require("express")
const route = express.Router()
const profileController = require("../controllers/profileController")

router.get("/", profileController.profile)

module.exports = route