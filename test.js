db = require('./database/models');

// db.Movies.findAll()
//     .then(function(movies) {
//         console.log(movies);
//     })

db.Genres.findAll()
    .then(function(movies) {
        console.log(movies);
    })