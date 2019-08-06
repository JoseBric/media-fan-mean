const {Strategy, ExtractJwt} = require('passport-jwt')
const User = require('./models/user')
const env = require('dotenv').config().parsed

module.exports = passport => {
  const opts = {}
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = env.SECRET

  passport.use(new Strategy(opts, (jwt_payload, done) => {

    User.findById(jwt_payload.data._id)
    .then(user => {
      if(!user) return done(null, false)
      return done(null, user)
    })
    .catch(err=>console.log(err))

  }))
}