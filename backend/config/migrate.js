require('dotenv').config()
const db = require('./db')

async function migrate() {
  console.log('Running migrations...')

  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      steam_id VARCHAR(32) NOT NULL UNIQUE,
      display_name VARCHAR(255),
      avatar VARCHAR(512),
      created_at DATETIME NOT NULL,
      last_login DATETIME NOT NULL
    )
  `)

  console.log('Migrations complete.')
  process.exit(0)
}

migrate().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(1)
})
