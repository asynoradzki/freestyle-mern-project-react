const express = require('express')
const router = express.Router();
const Comment = require('../models/Comment.js')
const commentsControllers = require('../controllers/index')

router.use(express.json())
router.use(express.urlencoded({ extended: false }))

router.post('/', commentsControllers.addComment)

router.get('/:title', commentsControllers.getComments)

module.exports = router