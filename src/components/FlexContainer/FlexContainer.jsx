import styles from './FlexContainer.module.css'
import PropTypes from 'prop-types'

export const FlexContainer = ({ children }) => {
  return <div className={styles.base}>{children}</div>
}

FlexContainer.propTypes = {
  children: PropTypes.node
}
