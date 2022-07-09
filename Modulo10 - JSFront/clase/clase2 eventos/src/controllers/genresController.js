const genres = []

const genresController = {
    'list': (req, res) => {

        res.render('genresList.ejs', { genres })

    }

}

module.exports = genresController;