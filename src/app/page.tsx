import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Andy Sorge - Developer</h1>
        <div className={styles.sectionLinks}>
          <h2 className={styles.sectionLink}>About</h2>
          <h2 className={styles.sectionLink}>Projects</h2>
          <h2 className={styles.sectionLink}>Experience</h2>
          <h2 className={styles.sectionLink}>Education</h2>
          <h2 className={styles.sectionLink}>Contact</h2>
        </div>
      </div>
      
    </main>
  )
}
