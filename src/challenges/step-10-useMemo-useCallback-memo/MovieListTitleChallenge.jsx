import PropTypes from 'prop-types'
import { memo } from 'react'

export const MovieListTitleChallenge = memo(function MovieListTitleChallenge({
  year
}) {
  console.log('Render movie list title challenge')
  return <h1>Action movies {year && `from ${year}`}</h1>
})

MovieListTitleChallenge.propTypes = {
  year: PropTypes.string
}
