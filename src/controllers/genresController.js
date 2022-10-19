const db = require('../../database/models');

const genresController = {
    list: (req, res) => {
        db.Genres.findAll()
            .then(
                function(genres) {
                    res.render("genresList", {genres: genres});
                }
            );
    },
    detail: (req, res) => {
        db.Genres.findByPk(req.params.id)
            .then(
                function(genre) {
                    res.render("genresDetail", {genre: genre});
                }
            );
    }
}

module.exports = genresController;