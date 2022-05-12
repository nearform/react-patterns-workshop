import { forwardRef } from 'react'
import styles from './Button.module.css'
import clsx from 'clsx'

export const Button = forwardRef(({ variant, ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={clsx(styles.button, styles[variant])}
    />
  )
})

Button.displayName = 'Button'
