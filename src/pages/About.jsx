import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>About</h1>
        <p className={styles.lead}>
          BadManners RP is a Red Dead Redemption 2 roleplay server built for
          players who want a serious, immersive experience in the wild west.
        </p>
        <p className={styles.body}>
          We started this server because we wanted a place where stories matter,
          characters have depth, and every session feels like a chapter in your
          own western novel. Whether you're a lawman, an outlaw, or just a
          traveller passing through — there's a place for you here.
        </p>
      </div>
    </div>
  )
}
