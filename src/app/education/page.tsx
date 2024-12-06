import Link from "next/link";
import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.greeting}>
        <h1>&#47;&#47;Hi, I&apos;m Andy</h1>
        <h2>&#47;&#47;I like to code</h2>
      </div>
    </main>
  )
}
