const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const router = express.Router()

// Redirect to Steam login
router.get('/steam', passport.authenticate('steam', { failureRedirect: '/' }))

// Steam callback
router.get('/steam/return',
  passport.authenticate('steam', { failureRedirect: `${process.env.FRONTEND_URL}/?auth=failed` }),
  (req, res) => {
    const token = jwt.sign(
      { steamId: req.user.steam_id, displayName: req.user.display_name },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )
    res.redirect(`${process.env.FRONTEND_URL}/auth/callback?token=${token}`)
  }
)

// Logout
router.get('/logout', (req, res) => {
  req.logout(() => {
    res.json({ success: true })
  })
})

module.exports = router
