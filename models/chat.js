const mongoose = require('mongoose')

const ChatSchema = mongoose.Schema({
  members: [String],
  messages: [{from: String, msg: String}],
})

module.exports = mongoose.model('chat', ChatSchema)