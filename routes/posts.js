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
    console.log(req)
    const key = req.file.key
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
    console.log(body)
    // s3.putObject({
    //   Body: body,
    //   Key: uniqueId().,
    // })
  })
    if(err) return res.json({success: err})
    res.json({file: req.file.location, success: true})
})

// @route  GET posts/feed
// @desc   Get Someone's Feed
// @acces  Authenticated
router.get('/feed', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  const following = req.user.following.map(({username}) => username)

  Post.find({'author.username': {$in: following}})
  .sort({'date': -1}).limit(9)
  .then(posts => res.json({success: true, posts}))
  .catch(err => res.json({success: false}))
})

// @route  GET posts/profile/username
// @desc   Get Someone's Profile
// @acces  Public
router.get('/profile/:username', (req, res, next) => {
  const { username } = req.params
  Post.find({'author.username': username})
  .sort({'date': -1}).limit(9)
  .then(posts => res.json({success: true, posts}))
  .catch(err => res.json({success: false}))
})

module.exports = router