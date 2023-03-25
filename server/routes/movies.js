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

module.exports = router