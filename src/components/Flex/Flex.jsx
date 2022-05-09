import styles from './Flex.module.css'
import PropTypes from 'prop-types'

export const Flex = ({ children }) => {
  return <div className={styles.base}>{children}</div>
}

Flex.propTypes = {
  children: PropTypes.node
}
