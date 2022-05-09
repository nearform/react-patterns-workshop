import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../../challenges/step-02-context/FilterStateProviderChallenge.js'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper.jsx'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge.js'
import { FilterFormFinalChallenge } from '../../challenges/step-12-third-party-libs/FilterFormFinalChallenge'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge.js'
import { MovieListChallenge } from '../../challenges/step-09-list-virtualization/MovieListChallenge.js'
import { DialogProviderChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/DialogProviderChallenge.jsx'

const MovieListContainer = () => {
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieListWrapper year={filterState.year}>
      <MovieListChallenge
        items={movieQuery.data}
        hasNextPage={movieQuery.hasNextPage}
        isNextPageLoading={movieQuery.isLoading}
        loadNextPage={movieQuery.loadNextPage}
      />
    </MovieListWrapper>
  )
}

const Step01ServerState = () => {
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

export default Step01ServerState
