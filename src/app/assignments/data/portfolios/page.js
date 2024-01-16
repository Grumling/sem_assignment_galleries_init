import { fetchAuthors } from '@/lib/data.service'
import styles from './page.module.css'
import DevDebugJson from '@/components/dev/devdebugjson/devdebugjson'
import DevAuthorPortfolio from '@/components/dev/devauthorportfolio/devauthorportfolio'

const Page = async () => {
  const authors = await fetchAuthors()

  return (
    <main className={styles.page}>
      <h1>Alt Author Data</h1>
      <DevDebugJson content={authors}></DevDebugJson>

      <h2>Hvert Enkelt Author</h2>
      {authors.map((author, index) => {
        return (
          <DevAuthorPortfolio key={index} author={author}></DevAuthorPortfolio>
        )
      })}
    </main>
  )
}

export default Page
