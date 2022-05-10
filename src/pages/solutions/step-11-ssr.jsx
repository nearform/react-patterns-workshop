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
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton.jsx'
import { useDialogContext } from '../../context/DialogContext.js'
import { MovieListTitleSolution } from '../../solutions/step-10-usememo-usecallback-memo/MovieListTitleSolution'
import { DialogProviderSolution } from '../../solutions/step-10-usememo-usecallback-memo/DialogProviderSolution'
import { movieDbApi } from '../../backend/movieDbApi.js'
import { DEFAULT_YEAR } from '../../constants.js'

const MovieListContainer = ({ preloadedFirstPage }) => {
  const dialog = useDialogContext()
  const filterState = useFilterStateSolution()
  const movieQuery = useInfiniteMovieQuerySolution(
    filterState,
    preloadedFirstPage
  )

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

const Step11Ssr = ({ preloadedFirstPage }) => {
  // TODO currently the dialog provider solution doesn't contrib to actual solution
  return (
    <DialogProviderSolution>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormSolution />
            <CodeSplittingSolution />
          </FilterModalSolution>
          <MovieListContainer preloadedFirstPage={preloadedFirstPage} />
        </FilterStateProviderSolution>
      </ErrorBoundarySolution>
    </DialogProviderSolution>
  )
}

export async function getServerSideProps() {
  // Prefetch initial data
  // TODO this doesn't factor in the current year (which is in context)
  const movieData = await movieDbApi.discover({
    page: 1,
    year: DEFAULT_YEAR
  })

  return {
    props: {
      preloadedFirstPage: movieData.results
    }
  }
}

export default Step11Ssr
