'use client'

import React, { useEffect, useState } from 'react'
import styles from '../styles/cursor.module.css'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updatePosition)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
    }

  })

  const cursorPosition = {transform: `translate(${position.x}px, ${position.y}px)`}

  return (
    <div className={styles.cursor} style={cursorPosition}>
      <div className={styles.cursorInner}></div>
    </div>
  )

}