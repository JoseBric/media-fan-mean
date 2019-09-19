const mongoose = require('mongoose')
const Schema = mongoose.Schema
const env = require('dotenv').config().parsed

const FollowSchema = Schema({
  username: {
    type: String,
    required: true,
  },
  profile_photo: {
    type: String,
    required: false,
  },
})

const UserSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_photo: {
    type: String,
    required: false,
  },
  biography: {
    type: String,
    required: false,
  },
  public_profile: {
    type: Boolean,
    required: false,
  },
  following: [FollowSchema],
  followers: [FollowSchema],
})

module.exports = mongoose.model('User', UserSchema)