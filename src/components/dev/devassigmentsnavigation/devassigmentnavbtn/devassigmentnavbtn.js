'use client'
import Link from 'next/link'
import styles from '../devassigmentnavbtn/devassigmentnavbtn.module.css'
import { FaJsSquare } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

const DevAssignmentsNavBtn = ({ link, title }) => {
  const pathname = usePathname()
  const active = pathname === link ? styles.active : ''
  return (
    <div className={`${styles.navBtn} ${active}`}>
      <Link href={`${link}`}>
        <FaJsSquare /> {title}
      </Link>
    </div>
  )
}

export default DevAssignmentsNavBtn
