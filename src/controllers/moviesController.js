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
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        return res.render('moviesAdd');
    },
    create: function (req, res) {
        db.Movies.create(
            {
                title: req.body.title,
                rating: req.body.rating,
                length: req.body.length,
                awards: req.body.awards,
                release_date: req.body.release_date
            }
        )
            .then(response => res.redirect('/movies'));
    },
    edit: function(req, res) {
        db.Movies.findByPk(req.params.id)
            .then(movie => {
                movie.dataValues.release_date = movie.release_date.getFullYear() + "-" + (("0" + (movie.release_date.getMonth() + 1)).slice(-2)) + "-" + (("0" + movie.release_date.getDate()).slice(-2)) ;
                return res.render('moviesEdit', {Movie: movie});
            });
    },
    update: function (req,res) {
        db.Movies.update(
            {
                title: req.body.title,
                rating: req.body.rating,
                length: req.body.length,
                awards: req.body.awards,
                release_date: req.body.release_date
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(response => res.redirect('/movies'))
    },
    delete: function (req, res) {
        db.Movies.findByPk(req.params.id)
            .then(movie => res.render("moviesDelete", {Movie: movie}));
    },
    destroy: function (req, res) {
        db.Movies.destroy(
            {
                where: {
                    id: req.params.id
                }
            }
        )
            .then(response => res.redirect('/movies'));
    }
}

module.exports = moviesController;