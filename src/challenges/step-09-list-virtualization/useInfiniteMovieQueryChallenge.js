import {useMovieQueryChallenge} from "../step-01-server-state/useMovieQueryChallenge.js";

export const useInfiniteMovieQueryChallenge = ({year}) => {
  // Update this to instead return the hook `useInfiniteMovieQuery` from `../hooks/useInfiniteMovieQuery`
  // passing the same data along (`{year}`).
  // This adds some new features to the query you developed in step 1
  return useMovieQueryChallenge({year})
}
