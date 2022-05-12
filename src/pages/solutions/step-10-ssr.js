import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateProviderSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { DetailedHelpBoxSolution } from '../../solutions/step-08-code-splitting/DetailedHelpBoxSolution'
import { FilterModalSolution } from '../../solutions/step-03-portals/FilterModalSolution'
import { useModal } from '../../context/ModalContext'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import { ThemeProviderSolution } from '../../solutions/step-09-usememo-usecallback-memo/ThemeProviderSolution'
import { DarkModeButtonSolution } from '../../solutions/step-09-usememo-usecallback-memo/DarkModeButtonSolution'
import { useMovieQueryWithPreloadedData } from '../../hooks/useMovieQueryWithPreloadedData'
import PropTypes from 'prop-types'
import { movieResultsFromDefaultYear } from '../../backend/helpers/movieResultsFromDefaultYear'
import { ToggleModalSolution } from '../../solutions/step-03-portals/ToggleModalSolution'

const MovieListContainer = ({ preloadedMoviesForDefaultYear }) => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQueryWithPreloadedData(
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
      filterButton={<ToggleModalSolution />}
      toggleDarkModeButton={<DarkModeButtonSolution />}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const Step10Ssr = ({ preloadedMovies }) => {
  const dialogContext = useModal()
  return (
    <ThemeProviderSolution>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormWithAutofocusSolution />
            <DetailedHelpBoxSolution />
          </FilterModalSolution>
          <MovieListContainer preloadedMoviesForDefaultYear={preloadedMovies} />
        </FilterStateProviderSolution>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundarySolution>
    </ThemeProviderSolution>
  )
}

export async function getServerSideProps() {
  // Prefetch initial data
  const preloadedMovies = await movieResultsFromDefaultYear()

  return {
    props: {
      preloadedMovies
    }
  }
}

export default Step10Ssr
