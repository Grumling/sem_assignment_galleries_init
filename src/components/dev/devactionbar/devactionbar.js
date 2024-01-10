'use client'
import styles from './devactionbar.module.css'
import React, { useState } from 'react'
import { useEffect, useRef } from 'react'

const DevActionBar = ({ setSizeFunction, size, config, onColorChange }) => {
  const activeSlideRef = useRef(null)

  // Function to handle color change
  const handleColorChange = (e) => {
    onColorChange(e.target.value) // Pass the selected color to the parent component
  }

  useEffect(() => {
    let slider = activeSlideRef.current
    slider.value = size
  }, [size])

  return (
    <div className={styles.container}>
      <div className={styles.status}>
        <h1>{size}</h1>
      </div>
      <div className={styles.actionBar}>
        <span
          className={styles.btn}
          onClick={() => setSizeFunction(config.small)}
        >
          {config.small}
        </span>
        <span
          className={styles.btn}
          onClick={() => setSizeFunction(config.medium)}
        >
          {config.medium}
        </span>
        <span
          className={styles.btn}
          onClick={() => setSizeFunction(config.large)}
        >
          {config.large}
        </span>
        <span className={styles.btn}>
          <input
            type='range'
            min='50'
            max='150'
            onChange={(e) => setSizeFunction(e.target.value)}
            defaultValue={size}
            ref={activeSlideRef}
          ></input>
        </span>
        <span className={styles.btn}>
          <input
            type='color'
            className={styles.color}
            onChange={handleColorChange} // Call handleColorChange on color change
          ></input>
        </span>
      </div>
    </div>
  )
}

export default DevActionBar
