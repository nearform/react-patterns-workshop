import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper.jsx'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'
import { FilterFormWithStyledInputSolution } from '../../solutions/step-06-forwarding-refs/FilterFormWithStyledInputSolution'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge.js'
import { MovieListChallenge } from '../../challenges/step-09-list-virtualization/MovieListChallenge.js'
import { DialogProviderChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/DialogProviderChallenge.jsx'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
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

const StepO6ForwardingRefs = () => {
  return (
    <DialogProviderChallenge>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormWithStyledInputSolution />
            <DetailedHelpBoxChallenge />
          </FilterModalSolution>
          <MovieListContainer />
        </FilterStateProviderSolution>
      </ErrorBoundarySolution>
    </DialogProviderChallenge>
  )
}

export default StepO6ForwardingRefs
