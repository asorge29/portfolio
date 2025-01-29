import styles from "../styles/page.module.css";
import {SiGithub, SiGmail, SiLinkedin} from "react-icons/si";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Andy Sorge - Developer</h1>
        <a href="https://github.com/asorge29" target="_blank" className={styles.link}>
          <SiGithub/>
          <div>Github - @asorge29&#8599;</div>
        </a>
        <a href="https://linkedin.com/in/asorge29" target="_blank" className={styles.link}>
          <SiLinkedin/>
          <div>LinkedIn&#8599;</div>
        </a>
        <a href="mailto:hi@asorge29.dev" target="_blank" className={styles.link}>
          <SiGmail/>
          <div>Email - hi@asorge29.dev&#8599;</div>
        </a>
    </main>
  )
}