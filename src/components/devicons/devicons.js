'use client'
import {
  FaAddressBook,
  FaAppStoreIos,
  FaBacterium,
  FaBrain,
  FaFaceGrinTongue,
  FaPersonDotsFromLine,
  FaRadiation,
  FaTableTennisPaddleBall,
  FaWandSparkles,
  FaVolcano,
} from 'react-icons/fa6'
import styles from './devicons.module.css'
import React, { useState } from 'react'
import DevActionBar from '../dev/devactionbar/devactionbar'

const DevIcons = () => {
  const [size, setSize] = useState(300)

  let style = { width: `${size}px`, height: `${size}px` }

  return (
    <div className={styles.container}>
      <DevActionBar setSizeFunction={setSize}></DevActionBar>

      <div className={styles.icons}>
        <FaAddressBook style={style} />
        <FaAppStoreIos style={style} />
        <FaBacterium style={style} />
        <FaBrain style={style} />
        <FaFaceGrinTongue style={style} />
        <FaPersonDotsFromLine style={style} />
        <FaRadiation style={style} />
        <FaTableTennisPaddleBall style={style} />
        <FaWandSparkles style={style} />
        <FaVolcano style={style} />
      </div>
    </div>
  )
}

export default DevIcons
