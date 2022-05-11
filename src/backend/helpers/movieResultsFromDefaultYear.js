import { movieDbApi } from '../movieDbApi'
import { DEFAULT_YEAR } from '../../constants'

export const movieResultsFromDefaultYear = () =>
  movieDbApi
    .discover({
      page: 1,
      year: DEFAULT_YEAR
    })
    .then(response => response.results)
