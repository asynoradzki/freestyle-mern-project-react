const Login = require('../models/Login')
const handleError = require('../error')

const getUsers = async (req, res) => {
    try {
        const data = await Login.find();
        res.json(data);
    } catch (error) {
        handleError(error, res)
    }
});

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

const addToWatchlist = async function(req, res) {
    try {
        const data = await Login.updateOne({ username: req.params.userName }, { $addToSet: { watchlist: req.body._id } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false });
    }
}

const deleteFromWatchlist = async function(req, res) {
    try {
        const data = await Login.updateOne({ username: req.params.userName }, { $pull: { watchlist: req.body._id } });
        res.json(data);
    } catch (error) {
        res.status(500).json({ success: false });
    }
}

const getMovieIds = async function(req, res) {
    try {
        const data = await Login.findById(req.params.id);
        res.json(data.watchlist)
    } catch (error) {
        res.status(500).json({ success: false });
    }
}



module.exports = { getUsers, signInUser, addToWatchlist, deleteFromWatchlist, getMovieIds }