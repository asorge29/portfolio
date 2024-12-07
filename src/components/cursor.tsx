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

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    return
  }

  const cursorPosition = {transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`}

  return (
    <div className={styles.cursor} style={cursorPosition}>
      <div className={styles.cursorInner}></div>
    </div>
  )

}