const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const movieSchema = new Schema({
    id: Number,
    title: String,
    year: Number,
    runtime: Number,
    genres: Array,
    director: String,
    actors: Array,
    plot: String,
})

const Movie = model('Movie', movieSchema);

module.exports = Movie;