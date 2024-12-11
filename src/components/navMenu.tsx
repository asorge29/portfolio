'use client'

import styles from "@/styles/navMenu.module.css"
import Link from "next/link";
import {useState} from "react";
import {Menu, X} from "lucide-react";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? <X className={styles.menuIcon} onClick={() => {setIsOpen(false)}}/> : <Menu className={styles.menuIcon} onClick={() => setIsOpen(true)}/>}
      {isOpen && <div className={styles.navMenu}>
        <Link onClick={() => {setIsOpen(false)}} href='/' className={styles.pageLink}>About Me</Link>
        <Link onClick={() => {setIsOpen(false)}} href='/skills' className={styles.pageLink}>My Skills</Link>
        <Link onClick={() => {setIsOpen(false)}} href='/projects' className={styles.pageLink}>My Projects</Link>
        <Link onClick={() => {setIsOpen(false)}} href='/experience' className={styles.pageLink}>My Experience</Link>
        <Link onClick={() => {setIsOpen(false)}} href='/education' className={styles.pageLink}>My Education</Link>
      </div>}
    </>
  )

}

export default NavMenu;