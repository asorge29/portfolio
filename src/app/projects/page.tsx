import styles from "@/styles/projects.module.css";

export default function Projects() {
  return (
    <main className={styles.main}>
      <h1>My Projects</h1>
      <div>
        <h2>Assignment Tracker</h2>
        <div className={styles.linkContainer}>
          <a
            href="https://github.com/asorge29/assignment-tracker"
            target="_blank"
            className={styles.link}
          >
            Source&#8599;
          </a>
          <a
            href="https://assignmenttracker.app"
            target="_blank"
            className={styles.link}
          >
            Live&#8599;
          </a>
        </div>
      </div>
      <div>
        <h2>Swash</h2>
        <div className={styles.linkContainer}>
          <a
            href="https://github.com/asorge29/swash"
            target="_blank"
            className={styles.link}
          >
            Source&#8599;
          </a>
        </div>
      </div>
      {/*<div>
        <h2>Kellogg Historical Archive</h2>
        <div className={styles.linkContainer}>
          <a
            href="https://github.com/asorge29/klgarchsite"
            target="_blank"
            className={styles.link}
          >
            Source&#8599;
          </a>
          <a
            href="https://kellogglibraryhistoricalarchive.org"
            target="_blank"
            className={styles.link}
          >
            Live&#8599;
          </a>
        </div>
      </div>*/}
    </main>
  );
}
