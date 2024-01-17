import styles from './devgalleryhero.module.css'
import Link from 'next/link'

const DevGalleryHero = ({ gallery }) => {
  // Opretter en URL til vores galleri.
  let url = '/galleries/' + gallery.name

  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        {/* Linker til vores galleri side. Med url´en. */}
        <h1>
          <Link href={url}>{gallery.name}</Link>
        </h1>
        <p>{gallery.year}</p>
      </div>
    </div>
  )
}

export default DevGalleryHero
