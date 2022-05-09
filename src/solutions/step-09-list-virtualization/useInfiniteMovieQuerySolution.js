import { useInfiniteMovieQuery } from '../../hooks/useInfiniteMovieQuery.js'

export const useInfiniteMovieQuerySolution = ({ year }) => {
  return useInfiniteMovieQuery({ year })
}
