import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../challenges/step-02-context/FilterStateProviderChallenge.jsx'
import { ErrorBoundaryChallenge } from '../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { MovieListWrapper } from '../components/MovieListContainer/MovieListWrapper.jsx'
import { FilterModalChallenge } from '../challenges/step-05-portals/FilterModalChallenge.js'
import { FilterFormFinalChallenge } from '../challenges/step-12-third-party-libs/FilterFormFinalChallenge'
import { DetailedHelpBoxChallenge } from '../challenges/step-08-code-splitting/DetailedHelpBoxChallenge.js'
import { useInfiniteMovieQueryChallenge } from '../challenges/step-09-list-virtualization/useInfiniteMovieQueryChallenge.js'
import { DialogProviderChallenge } from '../challenges/step-10-useMemo-useCallback-memo/DialogProviderChallenge.jsx'

const MovieListContainer = () => {
  const filterState = useFilterStateChallenge()
  const movieQuery = useInfiniteMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieListWrapper year={filterState.year} queryData={movieQuery.data} />
  )
}

const MovieExplorerApp = () => {
  return (
    <DialogProviderChallenge>
      <ErrorBoundaryChallenge>
        <FilterStateProviderChallenge>
          <FilterModalChallenge>
            <FilterFormFinalChallenge />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer />
        </FilterStateProviderChallenge>
      </ErrorBoundaryChallenge>
    </DialogProviderChallenge>
  )
}

export default MovieExplorerApp
