import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateProviderSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { DetailedHelpBoxSolution } from '../../solutions/step-08-code-splitting/DetailedHelpBoxSolution'
import { FilterModalSolution } from '../../solutions/step-03-portals/FilterModalSolution'
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton'
import { useDialogContext } from '../../context/DialogContext'
import { movieDbApi } from '../../backend/movieDbApi'
import { DEFAULT_YEAR } from '../../constants'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import { ThemeProviderSolution } from '../../solutions/step-09-usememo-usecallback-memo/ThemeProviderSolution'
import { DarkModeButtonSolution } from '../../solutions/step-09-usememo-usecallback-memo/DarkModeButtonSolution'
import { useMovieQueryWithPreloadedDataSolution } from '../../solutions/step-10-ssr/useMoveQueryWithPreloadedDataSolution'
import PropTypes from 'prop-types'

const MovieListContainer = ({ preloadedMoviesForDefaultYear }) => {
  const dialog = useDialogContext()
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQueryWithPreloadedDataSolution(
    filterState,
    preloadedMoviesForDefaultYear
  )

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieList
      items={movieQuery.data}
      year={filterState.year}
      filterButton={
        <ToggleFiltersButton isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
      toggleDarkModeButton={<DarkModeButtonSolution />}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const Step10Ssr = ({ preloadedFirstPage }) => {
  const dialogContext = useDialogContext()
  return (
    <ThemeProviderSolution>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormWithAutofocusSolution />
            <DetailedHelpBoxSolution />
          </FilterModalSolution>
          <MovieListContainer
            preloadedMoviesForDefaultYear={preloadedFirstPage}
          />
        </FilterStateProviderSolution>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundarySolution>
    </ThemeProviderSolution>
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
