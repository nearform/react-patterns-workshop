import { DEFAULT_YEAR } from '../../constants.js'

export const useMovieQueryChallenge = ({ year = DEFAULT_YEAR }) => {
  return {
    data: null,
    isLoading: false
  }
}
