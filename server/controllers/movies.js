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

const getMovie = async function (req, res) {
    try {
        const movie = await Movie.find({_id: req.params.id});
        res.json(movie)
    } catch (error) {
        handleError(error, res)
    }
}

module.exports = { getMovies, getMovie };