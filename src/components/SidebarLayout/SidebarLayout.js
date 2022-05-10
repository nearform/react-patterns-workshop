import styles from './SidebarLayout.module.css'

export const SidebarLayout = ({ leftColumn, children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.leftCol}>{leftColumn}</div>
        <div className={styles.mainCol}>{children}</div>
      </div>
    </div>
  )
}
