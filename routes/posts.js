const express = require('express')
const router = express.Router()
// const request = require('request')

const Post = require('../models/post')
const upload = require('../services/fileUpload')

const singleUpload = upload.single('image')

const passport = require('passport')
const env = require('dotenv').config().parsed

// @route  GET posts/
// @desc   Get Lastes Posts
// @acces  Public
router.get('/', (req, res, next) => {
  Post.find().sort({'date': -1}).limit(9)
  .then(posts => res.json({success: true, posts}))
  .catch(err => res.json({success: false}))
})

// @route  POST posts/
// @desc   Create A Post
// @acces  Authenticated
router.post('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  const {content} = req.body
  if(content == '') return res.json({success: false})
  const post = {
    content,
    author: {
      username: req.user.username,
      profile_photo: req.user.profile_photo,
    },
  }
  Post.create(post)
    .then(post => {res.json({success:true, post})})
    .catch(err => res.json({success: false}))
})

// @route  GET posts/uploadImage
// @desc   Upload Image to AWS S3
// @acces  Authenticated
router.post('/uploadImage', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  singleUpload(req, res, (err) => {
    if(err) return res.json({success: err})
    res.json({file: {url: req.file.location}, success: true})
  })
})

// @route  GET posts/uploadImageUrl
// @desc   Upload Image with URL to AWS S3
// @acces  Authenticated
router.post('/uploadImageUrl', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  request({uri: req.body.url, encoding: null}, (err, response, body) => {
    if(err || response.statusCode !== 200) {
      return res.json({success: false})
    } 
  })
    if(err) return res.json({success: err})
    res.json({file: req.file.location, success: true})
})

// @route  GET posts/feed
// @desc   Get Someone's Feed
// @acces  Authenticated
router.get('/feed', passport.authenticate('jwt', {session: false}), async (req, res, next)  => {
  const skip = Number(req.query.skip) || 0
  const limit = Number(req.query.limit) || 10

  const following = req.user.following.map(({username}) => username)

  const total = await Post.countDocuments({'author.username': {$in: following}})

  Post.find({'author.username': {$in: following}})
  .limit(limit).skip(skip).sort({'date': -1})
  .then(posts => res.json({success: true, posts, has_more: (total - skip - limit) > 0}))
  .catch(err => res.json({success: false}))
})

// @route  GET posts/profile/username
// @desc   Get Someone's Profile
// @acces  Public
router.get('/profile/:username', async (req, res, next) => {
  const { username } = req.params
  const skip = Number(req.query.skip) || 0
  const limit = Number(req.query.limit) || 10

  const total = await Post.countDocuments({'author.username': username})

  Post.find({'author.username': username})
  .limit(limit).skip(skip).sort({'date': -1})
  .then(posts => res.json({success: true, posts, has_more: (total - skip - limit) > 0}))
  .catch(err => res.json({success: false}))
})

// @route  GET posts/star/:post_id
// @desc   Star post
// @acces  Public
router.put('/star/:post_id', passport.authenticate('jwt', {session: false}), async (req, res, next) => {
  const {post_id} = req.params
  const {username, profile_photo} = req.user
  const user = {
    username,
    profile_photo,
  }

  const post = await Post.findById(post_id)
  const starred = post.stars.find(usr => usr.username == username)

  if(starred) await post.updateOne({$pull: {stars: user}})
  else await post.updateOne({$push: {stars: user}})

  if(res) res.json({success:true})
  else res.json({success:false})
})

// @route  PUT posts/updateProfilePhoto
// @desc   Update profile photo of the author
// @acces  Authenticated
router.put('/updateProfilePhoto', passport.authenticate('jwt', {session: false}), (req, res) => {
  
})



module.exports = router