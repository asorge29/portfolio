import styles from "@/styles/projects.module.css";
import {createClient} from "contentful";
import Image from "next/image";

interface Project {
  fields: {
    title: string;
    description: string;
    icons: string[];
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
            title={project.fields.title}
            description={project.fields.description}
            icons={project.fields.icons}
            live={project.fields.liveUrl}
            source={project.fields.sourceUrl}
          />
        ))}
      </div>
    </main>
  )
}

function Project({title, description, live, source, icons}: {
  title: string,
  description: string,
  icons: string[],
  live: string,
  source: string
}) {

  return (
    <div className={styles.project}>
      <h3 className={styles.projectTitle}>&#47;&#47;{title}</h3>
      <p>{description}</p>
      {icons && icons.map((icon, index) => (
        <Image
          key={index}
          src={`/${icon}.svg`}
          alt={icon}
          className={styles.icon}
          width={64}
          height={64}
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