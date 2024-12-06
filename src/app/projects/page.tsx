import styles from "@/styles/projects.module.css";
import {createClient} from "contentful";

interface Project {
  fields: {
    title: string;
    description: string;
    icons: Icon[];
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

interface Icon {
  sys: {
    id: string;
  },
  fields: {
    file: {
      url: string;
    }
  }
}

export default async function Home() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })

  const entries = await client.getEntries({content_type: 'project'})
  console.log(entries)
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
            title={project.fields.title as string}
            description={project.fields.description as string}
            icons={project.fields.icons as Icon[]}
            live={project.fields.liveUrl as string}
            source={project.fields.sourceUrl as string}
          />
        ))}
      </div>
    </main>
  )
}

function Project({title, description, live, source, icons}: {
  title: string,
  description: string,
  icons: Icon[],
  live: string,
  source: string
}) {

  return (
    <div className={styles.project}>
      <h3 className={styles.projectTitle}>&#47;&#47;{title}</h3>
      <p>{description}</p>
      {icons && icons.map((icon) => (
        <img
          key={icon.sys.id}
          src={icon.fields.file.url}
          alt={icon.sys.id}
          className={styles.icon}
        />
      ))}
      {live && <div className={styles.linkWrapper}>
        <a href={live} target="_blank" className={styles.projectLink}>
          View Live Project&#8599;
        </a>
      </div>}
      {source && <div className={styles.linkWrapper}>
        <a href={source} target="_blank" className={styles.projectLink}>
          View Source Code&#8599;
        </a>
      </div>}
    </div>
  )
}