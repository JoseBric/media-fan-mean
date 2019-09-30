const express = require('express')
const router = express.Router()

const passport = require('passport')
const auth = passport.authenticate('jwt', {session: false})

const Chat = require('../models/chat')

// @route  GET chats/messages/:username
// @desc   Get all messages between the authenticated user and other user
// @acces  Authenticated
router.get('/messages/:username', auth ,async (req, res, next) => {
  const {username: username1} = req.params
  const {username: username2} = req.user
  
  Chat.findOne({'members': {$all: [username1, username2]}}, async (err, chat) => {
    if(err) return console.error(err)
    if(!chat) {
      chat = await Chat.create({members: [username1, username2], messages: []})
    }
    res.json(chat.messages)
  })
})

// @route  GET chats/
// @desc   Get all chats of the authenticated user
// @acces  Authenticated
router.get('/', auth ,async (req, res) => {
  const authUser = req.user

  Chat.find({'members': authUser.username}, (err, chats) => {
    if(err) return console.error(err)
    res.json(chats)
  })
})

// @route  POST chats/:receiver
// @desc   Send a message to a user
// @acces  Authenticated
router.post('/:receiver', auth ,async (req, res) => {
  const {receiver} = req.params
  const {msg} = req.body
  const from = req.user.username

  Chat.findOne({'members': {$all: [receiver, from]}}, async (err, chat) => {
    if(err) return console.error(err)
    if(!chat) 
      chat = await Chat.create({members: [receiver, from], messages: []})
    chat.messages.push({from, msg})
    chat.save((err, data) => {
      res.json({from, msg})
    })
  })
})

module.exports = router