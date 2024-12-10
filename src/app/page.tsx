import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <pre className={styles.greeting}>
        interface Portfolio &#123;
        name: string;
        about: string;
        skills: string[];
        projects: Project[];
        experience: Experience[];
        education: Education[];
        contact: Contact;
      &#125;
      </pre>
    </main>
  )
}
