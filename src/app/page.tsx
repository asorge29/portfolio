import styles from "../styles/page.module.css";
import {SiGithub, SiGmail, SiLinkedin} from "react-icons/si";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Andy Sorge - Developer</h1>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <a href="https://github.com/asorge29/assignment-tracker" target="_blank" className={styles.link}>Assignment
          Tracker&#8599;</a>
        <a href="https://github.com/asorge29/swash" target="_blank" className={styles.link}>Swash&#8599;</a>
      </div>
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact</h2>
        <a href="https://github.com/asorge29" target="_blank" className={styles.link}>
          <SiGithub className={styles.icon}/>
          <div className={styles.tooltip}>Github - @asorge29&#8599;</div>
        </a>
        <a href="https://linkedin.com/in/asorge29" target="_blank" className={styles.link}>
          <SiLinkedin className={styles.icon}/>
          <div className={styles.tooltip}>LinkedIn&#8599;</div>
        </a>
        <a href="mailto:hi@asorge29.dev" target="_blank" className={styles.link}>
          <SiGmail className={styles.icon}/>
          <div className={styles.tooltip}>Email - hi@asorge29.dev&#8599;</div>
        </a>
      </div>
    </main>
  )
}