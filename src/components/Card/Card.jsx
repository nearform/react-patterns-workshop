import PropTypes from 'prop-types'

export const Card = ({ children }) => {
  return (
    <div
      style={{
        padding: '10px 10px',
        margin: '12px 0',
        border: '1px solid #efefef'
      }}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node
}
