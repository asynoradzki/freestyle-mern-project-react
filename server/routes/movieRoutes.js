const express = require('express')
const router = express.Router();
const Movie = require('../models/Movie.js')

router.get("/", async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies)
    } catch (error) {
        res.status(500).json({ success: false })
    }
})

/* Movie.create({
  id: 54,
  title: "TEST",
  year: 22,
  runtime: 100,
  genres: ["comedy", "drama"],
  director: "AAAAAA",
  actors: ["Kowalksi", "aaaa" ],
  plot: "sssssss",
})
.then(movie => {
  console.log(movie);
})
.catch(error => {
  console.error(error);
}) */

module.exports = router