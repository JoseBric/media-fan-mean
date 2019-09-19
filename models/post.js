const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: String,
  profile_photo: String,
})

const PostSchema = mongoose.Schema({
  content: {
    required: true,
    type: Object,
  },
  author: {
    required: true,
    type: {
      username: String,
      profile_photo: String,
    }
  },
  stars: {
    required: false,
    type: [UserSchema],
  },
  date: {
    required: true,
    type: Date,
    default: Date.now,
  },
})

PostSchema.statics.updateAuthorsPhoto = function (username, photo) {
  return this.model.update({$set: {'author.profile_photo': photo}}, {'author.username': username}, {multi: true})
}

module.exports = mongoose.model('Post', PostSchema)