const express = require('express')
const router = express.Router()

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
  const {title, content} = req.body
  if(title == '' || content == '') return res.json({success: false})
  const post = {
    title,
    content,
    author: req.user.username,
  }
  Post.create(post)
    .then(post => {res.json({success:true, post})})
    .catch(err => res.json({success:false}))
})

// @route  GET posts/signup
// @desc   Upload Image to AWS S3
// @acces  Authenticated
router.post('/uploadImage', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  singleUpload(req, res, (err) => {
    const key = req.file.key
    if(err) return res.json({success: err})
    res.json({url: req.file.location, success: true})
  })
})

// @route  GET get/:username
// @desc   Get Someones Feed
// @acces  Authenticated
router.get('/feed', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  let following = []
  req.user.following.forEach(element => {
    following.push(element.username)
  });
  Post.find({'author': {$in: following}})
  .sort({'date': -1}).limit(9)
  .then(posts => res.json({success: true, posts}))
  .catch(err => res.json({success: false}))
})
module.exports = router