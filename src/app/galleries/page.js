import Link from 'next/link'
import styles from './page.module.css'

export default async function Page() {
  return (
    <main className={styles.page}>
      <h1>Portfolie Gallerier</h1>
      <Link href='/galleries/umbra' alt='umbra'>
        UMBRA
      </Link>
    </main>
  )
}
