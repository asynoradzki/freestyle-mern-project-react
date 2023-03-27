const express = require('express')
const router = express.Router();
const commentsControllers = require('../controllers/comments')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/', commentsControllers.addComment)

router.get('/:title', commentsControllers.getComments)

module.exports = router