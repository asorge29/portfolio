import styles from "@/styles/about.module.css";
import { createClient } from "contentful";

export default async function About() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })

  const aboutMe = await client.getEntry('7aHtThO2633Yg7mkl94y3g')

  return (
    <main className={styles.main}>
        <h1 className={styles.title}>&#47;&#47;{aboutMe.fields.greeting as string}</h1>
        <p className={styles.about}>{aboutMe.fields.about as string}</p>
    </main>
  )
}
