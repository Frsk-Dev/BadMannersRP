import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import SteamAuthButton from './SteamAuthButton'
import styles from './Navbar.module.css'

const PUBLIC_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/rules', label: 'Rules' },
  { to: '/county-laws', label: 'County Laws' },
]

const AUTH_LINKS = [
  { to: '/characters', label: 'Characters' },
]

export default function Navbar() {
  const { user } = useAuth()

  const links = user ? [...PUBLIC_LINKS, ...AUTH_LINKS] : PUBLIC_LINKS

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
        <SteamAuthButton />
      </div>
    </header>
  )
}
