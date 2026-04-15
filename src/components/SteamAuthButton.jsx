import { useAuth } from '../context/AuthContext'
import styles from './SteamAuthButton.module.css'


export default function SteamAuthButton() {
  const { user, logout } = useAuth()

  if (user) {
    return (
      <div className={styles.user}>
        <img src={user.avatar} alt={user.display_name} className={styles.avatar} />
        <span className={styles.name}>{user.display_name}</span>
        <button onClick={logout} className={styles.logout}>
          Sign out
        </button>
      </div>
    )
  }

  return (
    <a
      href={`${import.meta.env.VITE_API_URL}/api/auth/steam`}
      className={styles.loginBtn}
    >
      <img src="/steam.png" alt="" className={styles.icon} />
      <span>Sign in via Steam</span>
    </a>
  )
}
