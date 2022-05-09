import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper.jsx'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { CodeSplittingSolution } from '../../solutions/step-08-code-splitting/CodeSplittingSolution.js'
import { useInfiniteMovieQuerySolution } from '../../solutions/step-09-list-virtualization/useInfiniteMovieQuerySolution.js'
import { MovieListSolution } from '../../solutions/step-09-list-virtualization/MovieListSolution.js'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'
import { DialogProviderSolution } from '../../solutions/step-10-usememo-usecallback-memo/DialogProviderSolution'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useInfiniteMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieListWrapper year={filterState.year}>
      <MovieListSolution
        items={movieQuery.data}
        hasNextPage={movieQuery.hasNextPage}
        isNextPageLoading={movieQuery.isLoading}
        loadNextPage={movieQuery.loadNextPage}
      />
    </MovieListWrapper>
  )
}

const Step10UseMemoUseCallbackMemo = () => {
  return (
    <DialogProviderSolution>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormSolution />
            <CodeSplittingSolution />
          </FilterModalSolution>
          <MovieListContainer />
        </FilterStateProviderSolution>
      </ErrorBoundarySolution>
    </DialogProviderSolution>
  )
}

export default Step10UseMemoUseCallbackMemo
