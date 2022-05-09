import { FlexContainer } from '../FlexContainer/FlexContainer.jsx'
import styles from './MovieListWrapper.module.css'
import PropTypes from 'prop-types'

export function MovieListWrapper({ title, children, filterButton }) {
  return (
    <div className={styles.container}>
      <FlexContainer>
        {title}
        {filterButton}
      </FlexContainer>
      {children}
    </div>
  )
}

MovieListWrapper.propTypes = {
  title: PropTypes.node,
  filterButton: PropTypes.node,
  children: PropTypes.node
}
