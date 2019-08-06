const express = require('express')
const router = express.Router()

const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/user')

const env = require('dotenv').config().parsed

router.post('/signup', (req, res, next) => {
  const {email, username, password} = req.body
  const hashedPassword = hashPassword(password)

  const newUser = new User({email, username, password: hashedPassword})

  newUser.save((err, user) => {
    if(err) res.json({success: false, msg: 'Failed to register user'})
    else res.json({success: true, msg: 'User registered'})
  })
})

router.post('/login', async (req, res, next) => {
  const {username, password} = req.body
  
  // Getting user by username
  const user = await User.findOne({$or:[{username: username}, {email: username}]})
  if(!user) return res.json({success: false, msg: 'User not found'})

  // Checking password
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch) return res.json({success: false, msg: 'Wrong password'})  

  // Loging In
  const token = jwt.sign({data: user}, env.SECRET, { expiresIn: 60 * 60 * 24 * 7})

  // Response with user info and token
  res.json({
    success: true,
    token: `Bearer ${token}`,
    user: {
      id: user._id,
      username: username,
      email: user.email,
    },
  })
})

router.get('/profile', passport.authenticate('jwt', {session:false}) ,(req, res, next) => {
  res.json({user: req.user})
})

router.get('/validate', (req, res, next) => {
  res.send('Validate')
})

function hashPassword (password) {
  const rounds = 10
  const hashedPassword = bcrypt.hashSync(password, rounds)
  return hashedPassword
}

module.exports = router