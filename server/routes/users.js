const express = require("express");
const router = express.Router();
const Login = require("../models/Login.js");
const usersControllers = require('../controllers/users');
const handleError = require('../error')
const jwt = require('jsonwebtoken')

router.get("/", async (req, res) => {
    try {
        const data = await Login.find();
        res.json(data);
    } catch (error) {
        handleError(error, res)
    }
});

router.post("/", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Please provide username and password' })
        }
        const user = await Login.findOne({ username }).select('+password')
        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({ message: 'Incorrect username or password' })
        }
        const token = jwt.sign({ id: user._id }, process.env.ACCES_TOKEN_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        })
        res.status(200).json({
            status: "success",
            token,
            user,
        })
    } catch (err) {
        handleError(err, res)

    }
});


router.patch("/add/:userName", usersControllers.addToWatchlist);
router.patch("/del/:userName", usersControllers.deleteFromWatchlist);
router.get("/:id", usersControllers.getMovieIds);


module.exports = router;
