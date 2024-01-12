import styles from '../devassigmentsnavigation/devassigmentsnavigation.module.css'
import DevAssignmentsNavBtn from './devassigmentnavbtn/devassigmentnavbtn'

const DevAssignmentsNavigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.header}>
        <h3>Assigments</h3>
      </div>
      <div className={styles.links}>
        <div>
          <DevAssignmentsNavBtn link={'/assignments'} title={'Assignments'} />
          <DevAssignmentsNavBtn link={'/assignments/icons'} title={'Icons'} />
          <DevAssignmentsNavBtn link={'/assignments/data'} title={'data'} />
        </div>
      </div>
    </div>
  )
}

export default DevAssignmentsNavigation
