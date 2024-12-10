import styles from "@/styles/navMenu.module.css"
import Link from "next/link";

const NavMenu = () => {

  return (
    <div className={styles.navMenu}>
      <Link href='/' className={styles.pageLink}>Home</Link>
      <Link href='/' className={styles.pageLink}>About</Link>
      <Link href='/' className={styles.pageLink}>Skills</Link>
      <Link href='/' className={styles.pageLink}>Projects</Link>
      <Link href='/' className={styles.pageLink}>Experience</Link>
      <Link href='/' className={styles.pageLink}>Education</Link>
    </div>
  )

}

export default NavMenu;