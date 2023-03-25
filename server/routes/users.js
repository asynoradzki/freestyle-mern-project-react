const express = require('express')
const router = express.Router();
const Login = require('../models/Login.js')

router.get("/", async (req, res) => {
    try {
        const data = await Login.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false });
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
        res.status(400).json({ success: false });
    }
});
module.exports = router