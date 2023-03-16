const mongoose = require('mongoose')
const { model, Schema } = mongoose;

const loginSchema = new Schema({
  username: String,
  password: String,
})

const Login = model('Login', loginSchema);

module.exports = Login;