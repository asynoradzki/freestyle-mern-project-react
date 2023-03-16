const express = require('express')
const router = express.Router();
const Comment = require('../models/Comment.js')

router.post("/:id", async (req, res) => {
    /* try {
        const movies = await Movie.find({});
        res.json(movies)
    } catch (error) {
        res.status(500).json({ success: false })
    } */
})

router.get("/:id", async (req, res) => {
    try {
        const movies = await Movie.find({});
        res.json(movies)
    } catch (error) {
        res.status(500).json({ success: false })
    }
})



module.exports = router