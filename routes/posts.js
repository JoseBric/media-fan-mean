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
  .then(post => res.json({success: true, post}))
  .catch(err => res.json({success: false}))
})

// @route  POST posts/
// @desc   Create A Post
// @acces  Authenticated
router.post('/', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  console.log(req.body)
  const {title, content, author} = req.body
  if(title == '' || content == '' || author == '') return res.json({success: false})
  const post = {
    title,
    content,
    author,
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

module.exports = router