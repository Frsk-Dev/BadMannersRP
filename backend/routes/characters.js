const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/auth')
const db = require('../config/db')

router.get('/', authMiddleware, async (req, res) => {
  try {
    const gameDb = process.env.DB_GAME_NAME

    // Passport-Steam gives decimal Steam ID — VORP stores as steam:<hex>
    const steamHex = BigInt(req.user.steamId).toString(16)
    const steamId = `steam:${steamHex}`

    const [characters] = await db.query(
      `SELECT
        c.charidentifier,
        c.firstname,
        c.lastname,
        c.money,
        c.hours,
        c.job,
        c.joblabel,
        c.isdead,
        c.gender,
        c.age,
        c.character_created,
        c.discordid,
        c.infamy
      FROM \`${gameDb}\`.characters c
      WHERE c.identifier = ?
      ORDER BY c.charidentifier ASC`,
      [steamId]
    )

    res.json({
      characters,
      updatedAt: new Date(),
    })
  } catch (err) {
    console.error('Characters fetch error:', err)
    res.status(500).json({ error: 'Failed to fetch characters' })
  }
})

module.exports = router
