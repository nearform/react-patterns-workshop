import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.js'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution.js'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper.js'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { CodeSplittingSolution } from '../../solutions/step-08-code-splitting/CodeSplittingSolution.js'
import { useInfiniteMovieQuerySolution } from '../../solutions/step-09-list-virtualization/useInfiniteMovieQuerySolution.js'
import { MovieListSolution } from '../../solutions/step-09-list-virtualization/MovieListSolution.js'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton.js'
import { useDialogContext } from '../../context/DialogContext.js'
import { MovieListTitleSolution } from '../../solutions/step-10-usememo-usecallback-memo/MovieListTitleSolution.js'
import { DialogProviderSolution } from '../../solutions/step-10-usememo-usecallback-memo/DialogProviderSolution.js'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateSolution()
  const movieQuery = useInfiniteMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieListWrapper
      title={<MovieListTitleSolution filterState={filterState} />}
      filterButton={
        <ToggleFiltersButton isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
    >
      <MovieListSolution
        items={movieQuery.data}
        hasNextPage={movieQuery.hasNextPage}
        isNextPageLoading={movieQuery.isLoading}
        loadNextPage={movieQuery.loadNextPage}
      />
    </MovieListWrapper>
  )
}

const Step10UsememoUsecallbackMemo = () => {
  // TODO currently the dialog provider solution doesn't contrib to actual solution
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

export default Step10UsememoUsecallbackMemo
