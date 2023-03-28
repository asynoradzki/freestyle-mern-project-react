const express = require('express')
const router = express.Router();
const Login = require('../models/Login.js')
const usersControllers = require('../controllers/users')
const handleError = require('../error.js')

router.get("/", async (req, res) => {
    try {
        const data = await Login.find();
        console.log(data)
        res.json(data);
    } catch (error) {
        handleError(error, res)

    }
});

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    const newUser = new Login({
        username,
        password,
    });
    try {
        const data = await newUser.save();
        res.json(data);
    } catch (err) {
        handleError(error, res)

    }
});
module.exports = router