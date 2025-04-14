const searchResultController = {
    searchResults: function (req, res) {
      res.render("search-results", {resultados}); 
    }
  };
  
  module.exports = searchResultController;
  