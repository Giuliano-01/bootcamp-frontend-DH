const path = require('path');

const movies = []

const moviesController = {
    list: (req, res) => {


        res.render('moviesList.ejs', { movies })
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {


        res.render(path.resolve(__dirname, '..', 'views', 'moviesAdd'))

    }
}

module.exports = moviesController;