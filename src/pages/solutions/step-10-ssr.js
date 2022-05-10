import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { DetailedHelpBoxSolution } from '../../solutions/step-08-code-splitting/DetailedHelpBoxSolution'
import { FilterModalSolution } from '../../solutions/step-03-portals/FilterModalSolution'
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton'
import { useDialogContext } from '../../context/DialogContext'
import { MovieListTitleSolution } from '../../solutions/step-09-usememo-usecallback-memo/MovieListTitleSolution'
import { DialogProviderSolution } from '../../solutions/step-09-usememo-usecallback-memo/DialogProviderSolution'
import { movieDbApi } from '../../backend/movieDbApi'
import { DEFAULT_YEAR } from '../../constants'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution'

const MovieListContainer = ({ preloadedFirstPage }) => {
  const dialog = useDialogContext()
  const filterState = useFilterStateSolution()
  // TODO this is not working correctly
  const movieQuery = useMovieQuerySolution(filterState, preloadedFirstPage)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieList
      items={movieQuery.data}
      title={<MovieListTitleSolution filterState={filterState} />}
      filterButton={
        <ToggleFiltersButton isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
    />
  )
}

const Step10Ssr = ({ preloadedFirstPage }) => {
  // TODO currently the dialog provider solution doesn't contrib to actual solution
  return (
    <DialogProviderSolution>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormWithAutofocusSolution />
            <DetailedHelpBoxSolution />
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

export default Step10Ssr
