import styles from "@/styles/projects.module.css";
import {createClient} from "contentful";

interface Project {
  fields: {
    title: string;
    description: string;
    tags: string[];
    liveUrl: string;
    sourceUrl: string;
  },
  sys: {
    id: string;
  },
  metadata: {
    tags: string[];
  }
}

export default async function Home() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })

  const entries = await client.getEntries({content_type: 'project'})
  const projects = entries.items as unknown as Project[];

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1>&#47;&#47;My Projects</h1>
      </div>
      <div className={styles.projects}>
        {projects && projects.map((project) => (
          <Project
            key={project.sys.id}
            title={project.fields.title}
            description={project.fields.description}
            tags={project.fields.tags}
            live={project.fields.liveUrl}
            source={project.fields.sourceUrl}
          />
        ))}
      </div>
    </main>
  )
}

function Project({title, description, live, source, tags}: {
  title: string,
  description: string,
  tags: string[],
  live: string,
  source: string
}) {

  return (
    <div className={styles.project}>
      <h3 className={styles.projectTitle}>&#47;&#47;{title}</h3>
      <div className={styles.tags}>
        {tags && tags.map((tag, index) => (
          <div key={index} className={styles.tag}>{tag}</div>
        ))}
      </div>
      <p>{description}</p>
      {(live || source) && <div className={styles.linkWrapper}>
        {live && <a href={live} target="_blank" className={styles.projectLink}>
          View Live Project&#8599;
        </a>}
        {source && <a href={source} target="_blank" className={styles.projectLink}>
          View Source Code&#8599;
        </a>}
      </div>}
    </div>
  )
}