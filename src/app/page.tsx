import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.greeting}>
        <h1>&#47;&#47;Hi, I&apos;m Andy</h1>
        <svg fill="var(--red)" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512" enable-background="new 0 0 512 512" className={styles.downArrow}>
<polygon points="289.7,341.3 289.7,0 204.3,0 204.3,341.3 33.7,170.7 33.7,298.7 247,512 460.3,298.7 460.3,170.7 "/>
</svg>
      </div>
    </main>
  )
}
