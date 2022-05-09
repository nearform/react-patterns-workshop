import PropTypes from 'prop-types'
import { memo } from 'react'

export const MovieListTitleSolution = memo(function MovieListTitleChallenge({
  filterState
}) {
  return <h1>Action movies {filterState.year && `from ${filterState.year}`}</h1>
})

MovieListTitleSolution.propTypes = {
  filterState: PropTypes.shape({
    year: PropTypes.number,
    setYear: PropTypes.func
  })
}
