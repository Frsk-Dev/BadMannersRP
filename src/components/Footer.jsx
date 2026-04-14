import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>
          Bad Manners Roleplay
        </span>
        <span className={styles.copy}>
          &copy; {new Date().getFullYear()} BadManners. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
