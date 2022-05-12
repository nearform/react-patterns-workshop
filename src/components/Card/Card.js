import PropTypes from 'prop-types'
import { forwardRef } from 'react'
import styles from './Card.module.css'

export const Card = forwardRef(function Card({ children }, ref) {
  return (
    <div ref={ref} className={styles.card}>
      {children}
    </div>
  )
})

Card.propTypes = {
  children: PropTypes.node
}
