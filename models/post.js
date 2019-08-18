const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
  author: {
    required: true,
    type: {
      username: String,
      profile_photo: {
        required: false,
        type: String,
      },
    }
  },
  date: {
    required: true,
    type: Date,
    default: Date.now,
  },
  content: {
    required: true,
    type: String,
  },
  stars: {
    required: true,
    default: 0,
    type: Number,
  }
})

const PostSchema = mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  content: {
    required: true,
    type: Object,
  },
  author: {
    required: true,
    type: String,
  },
  starts: {
    required: true,
    type: Number,
    default: 0,
  },
  date: {
    required: true,
    type: Date,
    default: Date.now,
  },
  comments: {
    required: false,
    type: [CommentSchema],
  }
})

module.exports = mongoose.model('Post', PostSchema)