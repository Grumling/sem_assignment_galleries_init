'use client'
import styles from './devactionbar.module.css'
import React, { useState } from 'react'

const DevActionBar = ({ setSizeFunction }) => {
  return (
    <div className={styles.actionBar}>
      <span className={styles.btn} onClick={() => setSizeFunction(20)}>
        Lille
      </span>
      <span className={styles.btn} onClick={() => setSizeFunction(50)}>
        Mellem
      </span>
      <span className={styles.btn} onClick={() => setSizeFunction(100)}>
        Stor
      </span>
      <span className={styles.btn}>
        <input
          type='range'
          min='50'
          max='150'
          onChange={(e) => setSizeFunction(e.target.value)}
        ></input>
      </span>
    </div>
  )
}

export default DevActionBar
