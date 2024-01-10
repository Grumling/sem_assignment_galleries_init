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
  const [size, setSize] = useState(150)
  const [selectedColor, setSelectedColor] = useState('#000000') // State to store the selected color

  let style = { width: `${size}px`, height: `${size}px`, color: selectedColor }

  let config = {
    small: 50,
    medium: 90,
    large: 150,
  }

  // Function to handle color change
  const handleColorChange = (color) => {
    setSelectedColor(color)
  }

  return (
    <div className={styles.container}>
      <DevActionBar
        setSizeFunction={setSize}
        size={size}
        config={config}
        onColorChange={handleColorChange} // Pass the function to handle color change
      ></DevActionBar>

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
