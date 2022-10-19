const db = require('../../database/models');

const moviesController = {
    list: (req, res) => {
        db.Movies.findAll()
            .then(
                function(movies) {
                    res.render("moviesList", {movies: movies});
                }
            );
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
            .then(
                function(movie) {
                    res.render("moviesDetail", {movie: movie});
                }
            );
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [
                ["release_date", "DESC"]
            ]
        })
            .then(
                function(movies) {
                    res.render("newestMovies", {movies: movies});
                }
            );
    },
    recommended: (req, res) => {
        db.Movies.findAll({
            order: [
                ["rating", "DESC"]
            ],
            limit: 5
        })
            .then(
                function(movies) {
                    res.render("recommendedMovies", {movies: movies});
                }
            );
    }
}

module.exports = moviesController;