import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/rules', label: 'Rules' },
  { to: '/county-laws', label: 'County Laws' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          Bad Manners<span>Roleplay</span>
        </NavLink>
        <nav className={styles.nav}>
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <a
          href="https://discord.gg/dAdR47B2sr"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.discord}
        >
          Join Discord
        </a>
      </div>
    </header>
  )
}
