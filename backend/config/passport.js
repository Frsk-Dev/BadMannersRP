const passport = require('passport')
const SteamStrategy = require('passport-steam').Strategy
const db = require('./db')

passport.serializeUser((user, done) => {
  done(null, user.steam_id)
})

passport.deserializeUser(async (steamId, done) => {
  try {
    const [rows] = await db.query('SELECT * FROM users WHERE steam_id = ?', [steamId])
    done(null, rows[0] || null)
  } catch (err) {
    done(err, null)
  }
})

passport.use(new SteamStrategy(
  {
    returnURL: `${process.env.BACKEND_URL}/api/auth/steam/return`,
    realm: process.env.BACKEND_URL,
    apiKey: process.env.STEAM_API_KEY,
  },
  async (identifier, profile, done) => {
    try {
      const steamId = profile.id
      const displayName = profile.displayName
      const avatar = profile.photos?.[2]?.value || profile.photos?.[0]?.value || null

      const [rows] = await db.query('SELECT * FROM users WHERE steam_id = ?', [steamId])

      if (rows.length > 0) {
        // Update existing user
        await db.query(
          'UPDATE users SET display_name = ?, avatar = ?, last_login = NOW() WHERE steam_id = ?',
          [displayName, avatar, steamId]
        )
        return done(null, rows[0])
      }

      // Create new user
      await db.query(
        'INSERT INTO users (steam_id, display_name, avatar, created_at, last_login) VALUES (?, ?, ?, NOW(), NOW())',
        [steamId, displayName, avatar]
      )

      const [newUser] = await db.query('SELECT * FROM users WHERE steam_id = ?', [steamId])
      return done(null, newUser[0])
    } catch (err) {
      return done(err, null)
    }
  }
))
