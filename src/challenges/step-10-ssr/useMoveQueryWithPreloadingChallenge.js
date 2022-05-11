import { useMovieQueryChallenge } from '../step-01-custom-hooks/useMovieQueryChallenge'

export const useMovieQueryWithPreloadedDataChallenge = (
  filters,
  preloadedDataForDefaultYear
) => {
  // Before you start copy and paste the code you created in the `useMovieQueryChallenge` file
  return useMovieQueryChallenge(filters)
}
