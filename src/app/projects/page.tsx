import styles from "@/styles/projects.module.css";
import {createClient} from "contentful";

interface Project {
  fields: {
    title: string;
    description: string;
    link: string;
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

  const entries = await client.getEntries({ content_type: 'project' })
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
            link={project.fields.link as string}
          />
        ))}
      </div>
    </main>
  )
}

function Project({ title, description, link }: { title: string, description: string, link: string }) {

  return (
    <div className={styles.project}>
      <h3 className={styles.projectTitle}>&#47;&#47;{title}</h3>
      <p>{description}</p>
      <div className={styles.linkWrapper}><a href={link} target="_blank" className={styles.projectLink}>View Project&#8599;</a></div>
    </div>
  )
}