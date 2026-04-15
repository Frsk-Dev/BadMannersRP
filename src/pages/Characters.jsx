import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './Characters.module.css'

function formatTime(minutes) {
  if (!minutes) return '0m'
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return h > 0 ? `${h}h ${m}m` : `${m}m`
}

function formatCurrency(amount) {
  if (amount == null) return '$0'
  return `$${Number(amount).toLocaleString()}`
}

function StatRow({ label, value }) {
  return (
    <div className={styles.statRow}>
      <span className={styles.statLabel}>{label}</span>
      <span className={styles.statValue}>{value ?? '—'}</span>
    </div>
  )
}

function CharacterCard({ char }) {
  const isDead = char.isdead === 1 || char.isdead === true
  const fullName = `${char.firstname} ${char.lastname}`
  const createdDate = char.character_created
    ? new Date(char.character_created).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    : '—'

  return (
    <div className={`${styles.card} ${isDead ? styles.dead : styles.alive}`}>
      <div className={styles.cardHeader}>
        <div>
          <h2 className={`${styles.charName} ${isDead ? styles.deadName : ''}`}>{fullName}</h2>
          <span className={styles.charId}>ID: {char.charidentifier}</span>
        </div>
        <span className={`${styles.statusBadge} ${isDead ? styles.badgeDead : styles.badgeAlive}`}>
          {isDead ? 'Dead' : 'Alive'}
        </span>
      </div>

      <div className={styles.statsGrid}>
        <StatRow label="Money" value={formatCurrency(char.money)} />
        <StatRow label="Job" value={char.joblabel || char.job || 'None'} />
        <StatRow label="Gender" value={char.gender || '—'} />
        <StatRow label="Age" value={char.age ?? '—'} />
        <StatRow label="Infamy" value={char.infamy ?? 0} />
        <StatRow label="Hours Played" value={`${char.hours ?? 0}h`} />
      </div>

      <div className={styles.cardFooter}>
        <span>Created: {createdDate}</span>
      </div>
    </div>
  )
}

export default function Characters() {
  const { token } = useAuth()
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [updatedAt, setUpdatedAt] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/characters`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.ok ? res.json() : Promise.reject(res.status))
      .then((data) => {
        setCharacters(data.characters)
        setUpdatedAt(data.updatedAt)
      })
      .catch(() => setError('Failed to load character data.'))
      .finally(() => setLoading(false))
  }, [token])

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Characters</h1>
          <p className={styles.subtitle}>View data about your current characters</p>
        </div>

        {loading && (
          <p className={styles.statusMsg}>Loading...</p>
        )}

        {error && (
          <p className={styles.statusMsg}>{error}</p>
        )}

        {!loading && !error && characters.length === 0 && (
          <p className={styles.statusMsg}>No characters found for your account.</p>
        )}

        {!loading && !error && characters.length > 0 && (
          <div className={styles.grid}>
            {characters.map((char) => (
              <CharacterCard key={char.charidentifier} char={char} />
            ))}
          </div>
        )}

        {updatedAt && (
          <p className={styles.updatedAt}>
            Data last updated: {new Date(updatedAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
          </p>
        )}
      </div>
    </div>
  )
}
