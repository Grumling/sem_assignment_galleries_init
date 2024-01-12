import { fetchGalleries } from '@/lib/data.service'
import styles from './page.module.css'

const Page = async () => {
  const galleries = await fetchGalleries()

  return (
    <main className={styles.page}>
      <h1>Data</h1>
      <pre>{`<DevDebugJson content{ { Hello : "World"} } />`}</pre>
    </main>
  )
}

export default Page
