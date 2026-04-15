const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const db = require('../config/db')

// Get current user profile
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT steam_id, display_name, avatar, created_at, last_login FROM users WHERE steam_id = ?',
      [req.user.steamId]
    )
    if (!rows.length) return res.status(404).json({ error: 'User not found' })
    res.json(rows[0])
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

module.exports = router
