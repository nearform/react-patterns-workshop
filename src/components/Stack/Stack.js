import styles from './Stack.module.css'
import { forwardRef } from 'react'

export const Stack = forwardRef(({ children }, ref) => {
  return (
    <div className={styles.stack} ref={ref}>
      {children}
    </div>
  )
})

Stack.displayName = 'Stack'
