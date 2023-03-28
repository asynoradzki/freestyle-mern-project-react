const mongoose = require('mongoose')
const { model, Schema } = mongoose;
const bcrypt = require('bcryptjs');

const loginSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please provide your username']
  },
  password: {
    type: String,
    required: [true, 'Please provide your password']
  }
  
});

loginSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

const Login = model('Login', loginSchema);

module.exports = Login;