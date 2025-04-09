const express = require("express")
const route = express.Router()
const searchResultController = require("../controllers/searchResultController")

router.get("/", searchResultController.searchResult)

module.exports = route