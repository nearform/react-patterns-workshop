import { useInfiniteMovieQuery } from '../../hooks/useInfiniteMovieQuery'

export const useInfiniteMovieQuerySolution = (
  filterState,
  preLoadedFirstPage
) => {
  return useInfiniteMovieQuery(filterState, preLoadedFirstPage)
}
