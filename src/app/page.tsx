import styles from "../styles/page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.greeting}>
        <h1>&#47;&#47;Hi, I&apos;m Andy</h1>
        <pre className={styles.code}>
          while (alive)<br/>
          &#123;<br/>
          &emsp;&emsp;code();<br/>
          &#125;
        </pre>
      </div>
    </main>
  )
}
