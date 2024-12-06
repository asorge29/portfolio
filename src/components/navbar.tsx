'use client'

import styles from "../styles/navbar.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {

  const pathname = usePathname();

  return (
    <div className={styles.links}>
        <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.current : ''}`}>Welcome</Link>
        <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.current : ''}`}>About</Link>
        <Link href="/projects" className={`${styles.link} ${pathname === '/projects' ? styles.current : ''}`}>Projects</Link>
        <Link href="/experience" className={`${styles.link} ${pathname === '/experience' ? styles.current : ''}`}>Experience</Link>
        <Link href="/education" className={`${styles.link} ${pathname === '/education' ? styles.current : ''}`}>Education</Link>
      </div>
  )
}