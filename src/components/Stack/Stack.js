import styles from './Stack.module.css'

export const Stack = ({ children }) => {
  return <div className={styles.stack}>{children}</div>
}
