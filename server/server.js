const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express()
const mongoDBlink = require('./secret')
const movieRoutes = require('./routes/movieRoutes')
const commentRoutes = require('./routes/commentRoutes')
const Login = require('./models/Login.js')

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
app.use('/api/comments', commentRoutes)
app.get("/api/users", async (req,res)=> {
  try {
    const data = await Login.find();
    res.json(data)
  } catch (error) {
    res.status(500).json({success: false})
  }
})

app.post('/api/users', async (req,res) => {
  console.log(req.body);
  const { username, password} = req.body;
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

/* Login.create({
  username: "abc",
  password: "123",
})
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
})
*/

app.use('/api/movies', movieRoutes)
