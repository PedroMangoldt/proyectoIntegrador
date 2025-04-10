const express = require("express");
const router = express.Router();
const searchResultController = require("../controllers/searchResultController");


router.get('/', searchResultController.searchResults);



module.exports = router; 
