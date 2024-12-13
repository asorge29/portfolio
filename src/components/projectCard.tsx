import styles from "@/styles/projectCard.module.css"

function ProjectCard({title, description, live, source, tags}: {
  title: string;
  description: string;
  tags: string[];
  live: string;
  source: string;
}) {
  return (
    <div className={styles.project}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <div className={styles.tags}>
        {tags && tags.map((tag, index) => (
          <div key={index} className={styles.tag}>{tag}</div>
        ))}
      </div>
      <p>{description}</p>
      {(live || source) && <div className={styles.linkWrapper}>
        {live && <a href={live} target="_blank" className={styles.projectLink}>
          View Live Project↗
        </a>}
        {source && <a href={source} target="_blank" className={styles.projectLink}>
          View Source Code↗
        </a>}
      </div>}
    </div>
  );
}

export default ProjectCard