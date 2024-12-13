import styles from "@/styles/projects.module.css";
import {createClient} from "contentful";
import ProjectCard from "@/components/projectCard";
import Carousel from "@/components/carousel";

interface Project {
  fields: {
    title: string;
    description: string;
    tags: string[];
    liveUrl: string;
    sourceUrl: string;
  };
  sys: {
    id: string;
  };
  metadata: {
    tags: string[];
  };
}

export default async function Projects() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const entries = await client.getEntries({content_type: 'project'});
  const projects = entries.items as unknown as Project[];

  const projectCards:React.ReactNode[] = []

  projects.map((project, index) => {
    projectCards[index] = <ProjectCard title={project.fields.title} description={project.fields.description} tags={project.fields.tags} live={project.fields.liveUrl} source={project.fields.sourceUrl} />
  })

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1>My Projects</h1>
      </div>
      <Carousel items={projectCards} />
    </main>
  );
}