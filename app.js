const express = require('express')
const path = require('path')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

// Import all environment variables
const env = require('dotenv').config().parsed

// Extract the variables from the env object
const { DB_URI } = env

// Connect to Mongo DB
mongoose.connect(DB_URI, { useNewUrlParser: true })

mongoose.connection.on('connected', () => {
  console.log('Connected to database ', DB_URI)
})

mongoose.connection.on('error', err => {
  console.log('Database error ', err)
})

const app = express()

// Middleware for beign able to get POST data
app.use(express.json())

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

require('./passport')(passport)

// Import routes
const users = require('./routes/users')

const PORT = 3000

// Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Allow requests from every address
app.use(cors())

// Apply routes
app.use('/users', users)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`)
})
