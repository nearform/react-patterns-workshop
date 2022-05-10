import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { CodeSplittingSolution } from '../../solutions/step-08-code-splitting/CodeSplittingSolution'
import { useInfiniteMovieQuerySolution } from '../../solutions/step-09-list-virtualization/useInfiniteMovieQuerySolution'
import { MovieListSolution } from '../../solutions/step-09-list-virtualization/MovieListSolution'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton'
import { useDialogContext } from '../../context/DialogContext'
import { MovieListTitleSolution } from '../../solutions/step-10-usememo-usecallback-memo/MovieListTitleSolution'
import { DialogProviderSolution } from '../../solutions/step-10-usememo-usecallback-memo/DialogProviderSolution'

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
