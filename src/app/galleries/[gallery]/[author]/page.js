import Link from 'next/link'
import styles from './page.module.css'

export default async function Page({ params }) {
  return (
    <main className={styles.page}>
      <h1>Portfolio</h1>
      <h2>Author: {params.author}</h2>
      <Link href='/galleries' alt='Lena Riis - Portfolio'>
        Tilbage til gallerierne
      </Link>
    </main>
  )
}
