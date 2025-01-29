'use client'

import Link from "next/link";
import styles from "@/styles/nav.module.css"
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className={styles.nav}>
      <Link className={styles.link} style={pathname === '/projects' ? {display: 'none'} : undefined} href="/projects">Projects</Link>
      <Link className={styles.link} style={pathname === '/' ? {display: 'none'} : undefined} href="/">Contact</Link>
    </div>
  );
};

export default Nav;