const jwt = require('jsonwebtoken')
const env = require('dotenv').config().parsed

const connectedUsers = {}

module.exports = (socket) => {
  socket.on('user-connected', username => {
    socket.username = username
    connectedUsers[username] = socket
  })

  socket.on('disconnect', () => {
    connectedUsers[socket.username] = undefined
  })

  socket.on('reply', (msg, receiver, token) => {
    if(!(receiver in connectedUsers) || !connectedUsers[receiver]) return
    jwt.verify(token.replace('Bearer ', ''), env.SECRET, (err, decoded) => {
      if(!decoded) return
      const user = decoded.data
      connectedUsers[receiver].emit('message', msg, user.username)
    })
  })
}