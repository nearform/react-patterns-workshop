import { Flex } from '../Flex/Flex.js'
import styles from './MovieListWrapper.module.css'
import PropTypes from 'prop-types'

export function MovieListWrapper({ title, children, filterButton }) {
  return (
    <div className={styles.container}>
      <Flex>
        {title}
        {filterButton}
      </Flex>
      {children}
    </div>
  )
}

MovieListWrapper.propTypes = {
  title: PropTypes.node,
  filterButton: PropTypes.node,
  children: PropTypes.node
}
