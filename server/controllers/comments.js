const Comment = require('../models/Comment')

const addComment = async function (req, res) {
    try {
        const { movieTitle, userName, comment } = req.body;
        console.log(movieTitle)
        let movie = await Comment.findOne({ title: movieTitle })
        movie ? await movie.comments.push({ userName, comment }) : movie = await new Comment({ title: movieTitle, comments: [{ userName, comment }] })
        await movie.save()
        console.log(movie)
        await res.json(movie)
    } catch (error) {
        handleError(error, res)
    }
}

const getComments = async function (req, res) {
    try {
        const movie = await Comment.findOne({ title: req.params.title });
       // console.log(movie)
        movie ? res.json(movie.comments) : res.json([])
    }
    catch (error) {
        handleError(error, res)
    }
}

function handleError(error, res) {
    res.status(error.status || 500).send({
        error: {
            error: error.status || 500,
            message: error.message || "Internal Server Error"
        }
    });
}

module.exports = {
    addComment,
    getComments
}
