import Image from 'next/image'
import DevDebugJson from '../devdebugjson/devdebugjson'
import styles from './devGalleryImage.module.css'
import DevImageMeta from '../devimagemeta/devimagemeta'
const DevGalleryImage = ({ image }) => {
  return (
    <>
      <Image
        src={image.path}
        alt={`Portfolio billede taget af ${image.author} udstillet i halleriet ${image.gallery}`}
        className={styles.image}
        width={image.width}
        height={image.height}
      />
      <DevImageMeta meta={image.meta}></DevImageMeta>
      <DevDebugJson content={image}></DevDebugJson>
    </>
  )
}
export default DevGalleryImage
