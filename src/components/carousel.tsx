'use client'

import styles from "@/styles/carousel.module.css"
import { useState } from "react";

const Carousel = ({items, className}:{items: React.ReactNode[], className?: string}) => {
  const [slide, setSlide] = useState(2)

  return (
    <div className={`${styles.carousel} ${className}`}>
      <div>
      {items && items.map((item, index) => (
        <div key={index} className={index === slide ? styles.selected : styles.hidden}>
          {item}
        </div>
      ))}
      </div>
      <div></div>
    </div>
  )
}

export default Carousel;