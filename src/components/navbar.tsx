import styles from "../styles/navbar.module.css"
import Link from "next/link"

export default function Navbar() {

  return (
    <div className={styles.links}>
        <Link href="/" className={styles.link}>Welcome</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/experience" className={styles.link}>Experience</Link>
        <Link href="/education" className={styles.link}>Education</Link>
      </div>
  )
}