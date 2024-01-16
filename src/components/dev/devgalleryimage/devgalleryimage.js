'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './devGalleryImage.module.css'
import DevImageMeta from '../devimagemeta/devimagemeta'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const DevGalleryImage = ({ image, showMeta = false }) => {
  const [isDetailsVisible, setDetailsVisible] = useState(false)

  const handleToggleDetails = () => {
    setDetailsVisible(!isDetailsVisible)
  }

  let displayDetails = showMeta ? (
    <DevImageMeta meta={image.meta}></DevImageMeta>
  ) : null

  return (
    <div>
      <Image
        src={image.path}
        alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`}
        className={styles.image}
        width={image.width}
        height={image.height}
      />
      {/* DisplayDetails er DevImageMeta */}
      {isDetailsVisible && displayDetails}
      <FaMagnifyingGlass onClick={handleToggleDetails} />
    </div>
  )
}
export default DevGalleryImage
