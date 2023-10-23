const Movie = require("../models/Movie");
const handleError = require("../error");
const fileReaderAsync = require("./fileReader");

const getMovies = async function (req, res) {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        handleError(error, res);
    }
};

const getChosenMovies = async function (req, res) {
    try {
        const movies = await Movie.find({ _id: req.body.movieIds });
        res.json(movies);
    } catch (error) {
        handleError(error, res);
    }
};

const getMovie = async function (req, res) {
    try {
        const movie = await Movie.findOne({ _id: req.params.id });
        res.json(movie);
    } catch (error) {
        handleError(error, res);
    }
};

async function getPosters(movies) {
    try {
        movies.forEach(async (movie) => {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c2602b91&t=${movie.title}`);
            const film = await response.json();
            updateMovie(movie._id, film);
        });
    } catch (error) {
        console.error(error);
    }
}

async function updateMovie(id, film) {
    try {
        const movie = await Movie.findOneAndUpdate({ _id: id }, { url: film.Poster });
    } catch (error) {
        console.error(error);
    }
}

async function putMoviesInDB(req, res) {
    try {
        const data = await fileReaderAsync("./data.json");
        const dataJson = JSON.parse(data);
        const movies = dataJson.movies;

        // const movie = movies[0];
        // const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c2602b91&t=${movie.title}`);
        // const film = await response.json();

        //     if (film.Response) {
        //         await Movie.create({
        //             title: movie.title,
        //             year: movie.year,
        //             runtime: movie.runtime,
        //             genres: movie.genres,
        //             director: movie.directors[0],
        //             actors: movie.actors,
        //             plot: film.Plot,
        //             url: film.Poster,
        //         });
        //     }

        movies.forEach(async (movie) => {
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c2602b91&t=${movie.title}`);
            const film = await response.json();

            if (film.Response) {
                await Movie.create({
                    title: movie.title,
                    year: movie.year,
                    runtime: movie.runtime,
                    genres: movie.genres,
                    director: movie.directors[0],
                    actors: movie.actors,
                    plot: film.Plot,
                    url: film.Poster,
                });
            }

        });

        res.json("success");
    } catch (error) {
        handleError(error, res);
    }
}

module.exports = { getMovies, getMovie, getChosenMovies, updateMovie, putMoviesInDB };
