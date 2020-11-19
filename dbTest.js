const db = require('./models');

// Create a movie| Will create a movie if movie not in table
db.movie.findOrCreate({
    where: { title: "Godfather"},
    defaults: {
        byline: "Vincenct Canby",
        headline: "Godfather, Part II",
        date: Date.now(),
        url: 'http://nyt.com'
    }
}).then(([movie, created]) => {
    console.log(created)
    console.log(movie);
});