import Link from 'next/link'
import styles from '../devassigmentnavbtn/devassigmentnavbtn.module.css'
import { FaJsSquare } from 'react-icons/fa'

const DevAssignmentsNavBtn = ({ link, title }) => {
  return (
    <div className={styles.navBtn}>
      <Link href={`${link}`}>
        <FaJsSquare /> {title}
      </Link>
    </div>
  )
}

export default DevAssignmentsNavBtn
