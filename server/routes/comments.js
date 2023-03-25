const express = require('express')
const router = express.Router();
const Comment = require('../models/Comment.js')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/', async (req, res) => {
    try {
        const { movieTitle, userName, comment } = req.body;
        let movie = await Comment.findOne({ title: movieTitle })
        movie ? await movie.comments.push({ userName, comment }) : movie = await new Comment({ title: movieTitle, comments: [{ userName, comment }] })
        await movie.save()
        await res.json(movie)
    } catch (error) {
        handleError(error, res)
    }
})

router.get('/:title', async (req, res) => {
    try {
        const movie = await Comment.findOne({ title: req.params.title });
        movie ? res.json(movie.comments) : res.json([])
    }
    catch (error) {
        handleError(error, res)
    }
})

function handleError(error, res) {
    res.status(error.status || 500).send({
        error: {
            error: error.status || 500,
            message: error.message || "Internal Server Error"
        }
    });
}


module.exports = router