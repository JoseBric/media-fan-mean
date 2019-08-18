const express = require('express')
const router = express.Router()

const Post = require('../models/post')
const upload = require('../services/fileUpload')

const singleUpload = upload.single('image')

const passport = require('passport')
const env = require('dotenv').config().parsed

// @route  GET posts/signup
// @desc   Create An User
// @acces  Public
router.get('/', (req, res, next) => {

})

router.post('/uploadImage', (req, res, next) => {
  singleUpload(req, res, (err) => {
    const key = req.file.key
    if(err) return res.json({success: err})
    res.json({url: req.file.location, success: true})
  })
})

module.exports = router