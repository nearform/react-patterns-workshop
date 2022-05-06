import styles from './FlexContainer.module.css'

export const FlexContainer = ({ children }) => {
  return <div className={styles.base}>{children}</div>
}
