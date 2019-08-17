const express = require('express')
const router = express.Router()

const Post = require('../models/post')

const passport = require('passport')

const env = require('dotenv').config().parsed

// @route  GET posts/signup
// @desc   Create An User
// @acces  Public
router.get('/', (req, res, next) => {

})