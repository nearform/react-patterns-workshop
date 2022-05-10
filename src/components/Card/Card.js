import PropTypes from 'prop-types'
import { forwardRef } from 'react'

export const Card = forwardRef(function Card({ children }, ref) {
  return (
    <div
      ref={ref}
      style={{
        padding: '10px 10px',
        margin: '12px 0',
        border: '1px solid #efefef'
      }}
    >
      {children}
    </div>
  )
})

Card.propTypes = {
  children: PropTypes.node
}
