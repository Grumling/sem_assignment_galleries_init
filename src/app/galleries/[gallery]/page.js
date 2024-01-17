import Link from 'next/link'
import styles from './page.module.css'

export default async function Page({ params }) {
  return (
    <main className={styles.page}>
      <h1>Portfolio´s</h1>
      <h2>Gallery: {params.gallery}</h2>
      <Link href='/galleries/umbra/lena-riis' alt='Til Lena Riis portfolio'>
        Lena Riis
      </Link>
    </main>
  )
}
