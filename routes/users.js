const express = require('express')
const router = express.Router()

const passport = require('passport')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/user')
const Post = require('../models/post')

const env = require('dotenv').config().parsed

const upload = require('../services/uploadProfilePhoto')
const singleUpload = upload.single('profile_photo')

// @route  GET users/
// @desc   Get all users
// @acces  Public
router.get('/', async (req, res, next) => {
  const users = await User.find()
  if(users) res.json({users, success:true})
  else res.json({success:false})
})

// @route  POST users/signup
// @desc   Create An User
// @acces  Public
router.post('/signup', async (req, res, next) => {
  const profile_photo = 'https://media-fan.s3-us-west-1.amazonaws.com/profile_photo/assets/default.png'
  const {email, username, password} = req.body
  const hashedPassword = hashPassword(password)

  const available = await usernameAvailable(username)
  if(available) {
    const newUser = new User({email, username, password: hashedPassword, following: [], followers: [], profile_photo})
  
    newUser.save((err, user) => {
      if(err) res.json({success: false, msg: 'Failed to register user'})
      else res.json({success: true, msg: 'User registered'})
    })
  } else res.json({success:false, msg: 'Username not available'})

})

// @route  POST users/login
// @desc   Login user returning JWT to frontend
// @acces  Public
router.post('/login', async (req, res, next) => {
  const {username, password} = req.body
  
  // Getting user by username
  const user = await User.findOne({$or:[{username: username}, {email: username}]})
  if(!user) return res.json({success: false, msg: 'User not found'})

  // Checking password
  const isMatch = await bcrypt.compare(password, user.password)
  if(!isMatch) return res.json({success: false, msg: 'Wrong password'})  

  user.password = null
  // Loging In
  const token = jwt.sign({data: user}, env.SECRET, { expiresIn: 60 * 60 * 24 * 7})


  // Response with user info and token
  res.json({
    success: true,
    token: `Bearer ${token}`,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      profile_photo: user.profile_photo,
    },
  })
})

// @route  GET users/profile/:username
// @desc   Get User Profile
// @acces  Public
router.get('/profile/:username', (req, res, next) => {
  const {username} = req.params
  User.findOne({username})
  .then(user => {
    user.password = null
    res.json({user, success: true})
  })
  .catch(err => res.statusCode(404).json({success:false, msg: err}))
})

router.put('/switchFollow/:username', passport.authenticate('jwt', {session:false}),async (req, res, next) => {
  const {username} = req.params //username of passiveUser
  const passiveUser = await User.findOne({username})
  const activeUser = req.user

  if(passiveUser.username == activeUser.username) 
    return res.statusCode(400).json({success:false, msg: 'You cannot follow yourself'}) 

  const following = activeUser.following.find(usr => usr.username = username) != undefined

  if(following) {
    // Unfollow
    activeUser.following = activeUser.following.filter(usr => usr.username != passiveUser.username)
    passiveUser.followers = passiveUser.followers.filter(usr => usr.username != activeUser.username)

    const unfollower = await activeUser.save()
    const unfollowed = await passiveUser.save()

    if(unfollower && unfollowed) res.json({success: true, following: false})
    else res.json({success: false})
  }
  else {
    // Follow
    const follower = await activeUser.updateOne({$push: {following: {
      username: passiveUser.username,
      profile_photo: passiveUser.profile_photo,
    }}})

    const followed = await passiveUser.updateOne({$push: {followers: {
      username: activeUser.username,
      profile_photo: activeUser.profile_photo,
    }}})

    if(follower && followed) res.json({success: true, following: true})
    else res.json({success: false})
  }
})

// @route  PUT users/follow/:username
// @desc   Follow a user
// @acces  Authenticated
router.put('/follow/:username', passport.authenticate('jwt', {session:false}) ,async (req, res, next) => {
  const {username} = req.params
  const {_id} = req.user

  // Get both users. Followed and follower
  try {
    const followedUser = await User.findOne({username})
    const followerUser = await User.findOne({_id})
  
    // Check if already follows user
    const alreadyFollows = followerUser.following.find((val, idx) => val.username = followedUser.username)
    if(alreadyFollows) res.json({success: false, msg: 'You already follow this user'})
    else {
    // Update following and followers
    const updatedFollowed = await followedUser.updateOne({$push: {followers: {
      username: followerUser.username,
      profile_photo: followerUser.profile_photo,
    }}})

    const updatedFollowing = await followerUser.updateOne({$push: {following: {
      username: followedUser.username,
      profile_photo: followedUser.profile_photo,
    }}})
    
    // Send successful response whether both users have been updated correctly
    if(updatedFollowed && updatedFollowing) res.json({success: true})
    else res.json({success: false})
  }
} catch (error) {
  res.status(404).json({success:false, err: error})
}
})


// @route  PUT users/unfollow/:username
// @desc   Unfollow user
// @acces  Authenticated
router.put('/unfollow/:username', passport.authenticate('jwt', {session:false}) , async (req, res, next) => {
  const {username} = req.params
  const {_id} = req.body

  const unfollowedUser = await User.findOne({username})
  const unfollowerUser = await User.findOne({_id})
  // Check if users are exist
  if(!unfollowedUser || !unfollowerUser) res.json({success:false})

  // Remove user from followers
  unfollowedUser.followers = unfollowedUser.followers.filter(val => val.username != unfollowerUser.username)
  unfollowedUser.save((err, doc) => {
    if(err) {
      res.json({success: false, err})
      return
    }
  })
  
  // Remove user from followed
  unfollowerUser.following = unfollowerUser.following.filter(val => val.username != unfollowedUser.username)
  unfollowerUser.save((err, doc) => {
    if(err) res.json({success: false, err: err})
    else res.json({success: true})
  })
})


// @route  PUT users/updateEmail/:username
// @desc   Change email
// @acces  Authenticated
router.put('/updateEmail/:username', passport.authenticate('jwt', {session:false}) ,async (req, res, next) => {
  const {username} = req.params
  const {email} = req.body
  const isEmailUsed = await User.find({email})
  if(!isEmailUsed) {
    User.updateOne({username}, {$set: {email}})
    .then(user => res.json({user, success: true}))
    .catch(err => res.json({success:false, alreadyUsed: false}))
  } 
  else res.json({success: false, alreadyUsed: true,})
})

// @route  PUT users/updateEmail
// @desc   Change email
// @acces  Authenticated
router.put('/updateEmail', passport.authenticate('jwt', {session:false}) ,async (req, res, next) => {
  const {username} = req.user
  const {email} = req.body
  if(email == req.user.email) res.json({success: true})
  const isEmailUsed = await User.countDocuments({email})

  if(isEmailUsed == 0) {
    User.updateOne({username}, {$set: {email}})
    .then(() => res.json({email, success: true}))
    .catch(err => res.json({success:false, alreadyUsed: false}))
  } 
  else res.json({success: false, alreadyUsed: true,})
})

// @route  PUT users/updateBiography
// @desc   Change email
// @acces  Authenticated
router.put('/updateBiography', passport.authenticate('jwt', {session:false}) ,async (req, res, next) => {
  const {username} = req.user
  const {biography} = req.body

  User.updateOne({username}, {$set: {biography}})
  .then(() => res.json({biography, success: true}))
  .catch(() => res.json({success:false}))
})

// @route  PUT users/updateProfilePhoto
// @desc   Change email
// @acces  Authenticated
router.put('/updateProfilePhoto', passport.authenticate('jwt', {session:false}) ,async (req, res, next) => {
  const {username} = req.user
  
  singleUpload(req, res, (err) => {
    if(err) return res.json({success: false, err: 'err'})
    const profile_photo = req.file.location
    User.updateOne({username}, {$set: {profile_photo}})
    .then(() => {
      Post.update({$set: {'author.profile_photo': profile_photo}}, {'author.username': username}, {multi: true})
      res.json({success: true, url: profile_photo})
    })
    .catch((err) => res.json({err: err, success:false}))
  })

})


// @route  GET users/usernameAvailable/:username
// @desc   Check username availability email
// @acces  Public
router.get('/usernameAvailable/:username', async (req, res, next) => {
  const {username} = req.params
  const available = await usernameAvailable(username)
  if(available) res.json({available: true})
  else res.json({available: false})
})

// @route  GET users/checkFollow/:active/:passive
// @desc   Check if active user follows passive user
// @acces  Public
router.get('/checkFollow/:active/:passive', async (req, res, next) => {
  const {active, passive} = req.params
  const activeUser = await User.findOne({username: active})
  const following = activeUser.following.find(usr => usr.username == passive) != undefined
  res.json({following})
})

// @route  GET users/profile_photo/:username
// @desc   Get user's profile photo
// @acces  Public
router.get('/profile_photo/:username', async (req, res, next) => {
  const {username} = req.params
  const {profile_photo} = await User.findOne({username})
  res.json({profile_photo})
})

// @route  POST users/profile_photos
// @desc   Get profile photos
// @acces  Public
router.post('/profile_photos', async (req, res, next) => {
  const {usernames} = req.body
  const profile_photos = await User.find({username: { $in: usernames }}).select('profile_photo username -_id')
  res.json(profile_photos)
})

// @route  GET users/getFollows/:username
// @desc   Check followers and following list
// @acces  Public
router.get('/getFollows/:username', (req, res, next) => {
  const {username} = req.params
  User.findOne({username})
    .then(user => {
      res.json({username, following: user.following, followers: user.followers})
    })
})

// @route  GET users/search_user/:string
// @desc   Search a user matching the string passed as parameter
// @acces  Public
router.get('/search_user/:string', (req, res, next) => {
  const {string} = req.params
  User.find({username: {$regex: `${string}`}}).select('email username profile_photo -_id')
    .then(users => {
      if(users.length == 0) res.json({matches: false})
      res.json({users, matches: true})
    })
    .catch(err => res.json({err: true, matches: false}))
})

async function usernameAvailable(username) {
  const user = await User.findOne({username})
  if(user) return false
  return true
}

function hashPassword (password) {
  const rounds = 10
  const hashedPassword = bcrypt.hashSync(password, rounds)
  return hashedPassword
}

module.exports = router