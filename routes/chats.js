const express = require('express')
const router = express.Router()

const passport = require('passport')
const auth = passport.authenticate('jwt', {session: false})

const Chat = require('../models/chat')


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

router.get('/', auth ,async (req, res) => {
  const authUser = req.user

  Chat.find({'members': authUser.username}, (err, chats) => {
    if(err) return console.error(err)
    res.json(chats)
  })
})

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