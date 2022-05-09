import PropTypes from 'prop-types'
import { memo } from 'react'

export const MovieListTitleChallenge = memo(function MovieListTitleChallenge({
  year
}) {
  return <h1>Action movies {year && `from ${year}`}</h1>
})

MovieListTitleChallenge.propTypes = {
  year: PropTypes.number
}
