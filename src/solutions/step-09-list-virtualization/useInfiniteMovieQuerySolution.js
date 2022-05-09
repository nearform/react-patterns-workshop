import { useInfiniteMovieQuery } from '../../hooks/useInfiniteMovieQuery.js'

export const useInfiniteMovieQuerySolution = (
  filterState,
  preLoadedFirstPage
) => {
  return useInfiniteMovieQuery(filterState, preLoadedFirstPage)
}
