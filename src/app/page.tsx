import styles from "../styles/page.module.css";
import {SiGithub, SiGmail, SiLinkedin} from "react-icons/si";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Andy Sorge - Developer</h1>
                <a href="https://github.com/asorge29" className={styles.link}>
                    <SiGithub className={styles.icon}/>
                    <div className={styles.tooltip}>Github - @asorge29&#8599;</div>
                </a>
                <a href="https://linkedin.com/in/andy-sorge-1531ba303" className={styles.link}>
                    <SiLinkedin className={styles.icon}/>
                    <div className={styles.tooltip}>LinkedIn&#8599;</div>
                </a>
                <a href="mailto:hi@asorge29.dev" className={styles.link}>
                    <SiGmail className={styles.icon}/>
                    <div className={styles.tooltip}>Email - hi@asorge29.dev&#8599;</div>
                </a>
        </main>
    )
}