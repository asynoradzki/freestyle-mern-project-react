const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const mongoDBlink = require('./secret')
const movieRoutes = require('./routes/movieRoutes')
const movieRoutes = require('./routes/commentRoutes')


app.use(cors())
app.use(express.json())

mongoose
  .connect(mongoDBlink)
  .then(() => app.listen(3001, () => console.log('http://127.0.0.1:3001')))
  .catch((err) => console.log(err))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/movies', movieRoutes)
app.use('/api/comments', movieRoutes)