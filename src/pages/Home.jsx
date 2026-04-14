import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Home.module.css'

const NAV_LINKS = [
  { to: '/rules', label: 'Rules' },
  { to: '/county-laws', label: 'County Laws' },
]

// Restarts every 6 hours — calculates time until next restart
function useRestartCountdown(intervalHours = 6) {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    function calc() {
      const now = new Date()
      const msSinceEpoch = now.getTime()
      const intervalMs = intervalHours * 60 * 60 * 1000
      const remaining = intervalMs - (msSinceEpoch % intervalMs)
      const h = Math.floor(remaining / (1000 * 60 * 60))
      const m = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60))
      setDisplay(`${h}h ${m}m`)
    }
    calc()
    const id = setInterval(calc, 30000)
    return () => clearInterval(id)
  }, [intervalHours])

  return display
}

export default function Home() {
  const restart = useRestartCountdown(6)

  return (
    <div className={styles.hero}>

      {/* Right image panel with diagonal mask */}
      <div className={styles.imagePanel} aria-hidden="true" />

      {/* Overlay gradients */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Top nav */}
      <header className={styles.nav}>
        <span className={styles.navLogo}>
          Bad Manners <em>Roleplay</em>
        </span>
        <nav className={styles.navLinks}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.navLink}>
              {label}
            </Link>
          ))}
          <a
            href="https://discord.gg/dAdR47B2sr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navDiscord}
          >
            Discord
          </a>
        </nav>
      </header>

      {/* Brand block — left side */}
      <div className={styles.brand}>
        <img src="/Logo.png" alt="Bad Manners" className={styles.brandLogo} />
        <h1 className={styles.brandName}>Bad Manners</h1>
        <p className={styles.brandTagline}>A story-driven roleplay experience</p>
        <div className={styles.actions}>
          <a
            href="https://discord.gg/dAdR47B2sr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Join the Discord
          </a>
          <Link to="/rules" className={styles.btnSecondary}>
            Server Rules
          </Link>
        </div>
      </div>

      {/* Bottom strip */}
      <div className={styles.bottomStrip}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Restart in</span>
          <span className={styles.statValue}>{restart}</span>
        </div>
        <div className={styles.stripDivider} />
        <div className={styles.stat}>
          <span className={styles.statLabel}>Platform</span>
          <span className={styles.statValue}>RedM</span>
        </div>
        <div className={styles.stripDivider} />
        <div className={styles.stat}>
          <span className={styles.statLabel}>Community</span>
          <span className={styles.statValue}>Discord</span>
        </div>
      </div>

    </div>
  )
}
