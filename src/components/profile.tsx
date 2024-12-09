import styles from "@/styles/profile.module.css";
import Image from "next/image";
import {SiGithub, SiGmail, SiLinkedin} from "react-icons/si"
import {createClient} from "contentful";
import NavMenu from "./navMenu";

interface Profile {
  fields: {
    title: string;
    tags: string[];
    greeting: string;
  },
  sys: {
    id: string;
  },
  metadata: {
    tags: string[];
  }
}

const Profile = async () => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })

  const profile = await client.getEntry("4KeAmvdrlpJTTjrM6j9Ifo") as unknown as Profile;

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <NavMenu />
        <div className={styles.links}>
          <a href="https://github.com/asorge29" className={styles.iconLink}>
            <SiGithub className={styles.icon}/>
            <div className={styles.tooltip}>Github - @asorge29</div>
          </a>
          <a href="https://linkedin.com/in/andy-sorge-1531ba303" className={styles.iconLink}>
            <SiLinkedin className={styles.icon}/>
            <div className={styles.tooltip}>LinkedIn</div>
          </a>
          <a href="mailto:hi@asorge29.dev" className={styles.iconLink}>
            <SiGmail className={styles.icon}/>
            <div className={styles.tooltip}>Email - hi@asorge29.dev</div>
          </a>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.imageBorder}>
          <div className={styles.imageContainer}>
            <Image src="/andy.jpg" alt="Profile Picture" fill className={styles.image}/>
          </div>
        </div>
        <h1 className={styles.name}>Andy Sorge</h1>
        <h2 className={styles.title}>{profile.fields.title}</h2>
        <div className={styles.tags}>
          {profile.fields.tags.map((tag, index) => (
            <div key={index} className={styles.tag}>{tag}</div>
          ))}
        </div>
        <p className={styles.greeting}>{profile.fields.greeting}</p>
      </div>
    </div>
  )
}

export default Profile;