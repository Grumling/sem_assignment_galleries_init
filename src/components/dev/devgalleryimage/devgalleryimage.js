'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './devGalleryImage.module.css'
import DevImageMeta from '../devimagemeta/devimagemeta'
import { FaMagnifyingGlass } from 'react-icons/fa6'

// Define a functional React component named DevGalleryImage, which takes two props: image and showMeta
const DevGalleryImage = ({ image = false }) => {
  // Initialize state for managing the visibility of details
  const [isDetailsVisible, setDetailsVisible] = useState(false)

  // Define a function to toggle the visibility of details
  const handleToggleDetails = () => {
    setDetailsVisible(!isDetailsVisible)
  }

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
      {isDetailsVisible ? (
        <DevImageMeta meta={image.meta}></DevImageMeta>
      ) : (
        'Nej'
      )}
      <FaMagnifyingGlass onClick={handleToggleDetails} />
    </div>
  )
}
export default DevGalleryImage
