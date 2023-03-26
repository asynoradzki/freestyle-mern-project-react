const Movie = require('../models/Movie')
const handleError = require('./error')

const getMovies = async function (req, res) {
    try {
        const movies = await Movie.find();
        res.json(movies)
    } catch (error) {
        handleError(error, res)
    }
}

module.exports = { getMovies };