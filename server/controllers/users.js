const Login = require('../models/Login')
const handleError = require('./error')

const getUsers = async function (res, req) {
    try {
        const data = await Login.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false });
    }
}

const signInUser = async function (res, req) {
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
}

module.exports = { getUsers, signInUser }