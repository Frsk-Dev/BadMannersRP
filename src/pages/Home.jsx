import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import SteamAuthButton from '../components/SteamAuthButton'
import styles from './Home.module.css'

const IMAGES = [
  '/images/imagebm1.png',
  '/images/imagebm2.png',
  '/images/imagebm3.png',
  '/images/imagebm4.png',
  '/images/imagebm6.png',
  '/images/imagebm7.png',
  '/images/imagebm8.png',
]

const PUBLIC_LINKS = [
  { to: '/rules', label: 'Rules' },
  { to: '/county-laws', label: 'County Laws' },
]

const AUTH_LINKS = [
  { to: '/characters', label: 'Characters' },
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
  const { user } = useAuth()
  const navLinks = user ? [...PUBLIC_LINKS, ...AUTH_LINKS] : PUBLIC_LINKS

  const [slideA, setSlideA] = useState(IMAGES[0])
  const [slideB, setSlideB] = useState(IMAGES[1])
  const [activeSlide, setActiveSlide] = useState('A')
  const indexRef = useRef(1)

  useEffect(() => {
    const id = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % IMAGES.length
      const nextImage = IMAGES[indexRef.current]
      if (activeSlide === 'A') {
        setSlideB(nextImage)
        setActiveSlide('B')
      } else {
        setSlideA(nextImage)
        setActiveSlide('A')
      }
    }, 5000)
    return () => clearInterval(id)
  }, [activeSlide])

  return (
    <div className={styles.hero}>

      {/* Right image panel with crossfading slideshow */}
      <div className={styles.imagePanel} aria-hidden="true">
        <div className={`${styles.slide} ${activeSlide === 'A' ? styles.slideActive : ''}`}
          style={{ backgroundImage: `url(${slideA})` }} />
        <div className={`${styles.slide} ${activeSlide === 'B' ? styles.slideActive : ''}`}
          style={{ backgroundImage: `url(${slideB})` }} />
      </div>

      {/* Overlay gradients */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Top nav */}
      <header className={styles.nav}>
        <nav className={styles.navLinks}>
          {navLinks.map(({ to, label }) => (
            <Link key={to} to={to} className={styles.navLink}>
              {label}
            </Link>
          ))}
          <SteamAuthButton />
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
