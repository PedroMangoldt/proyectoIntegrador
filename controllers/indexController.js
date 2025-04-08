const indexController = {
    index: function name(req, res) {
        return res.render('index', { title: 'Express' });
}
}

module.exports = indexController;