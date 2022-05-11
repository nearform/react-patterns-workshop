import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateProviderSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { DetailedHelpBoxSolution } from '../../solutions/step-08-code-splitting/DetailedHelpBoxSolution'
import { FilterModalSolution } from '../../solutions/step-03-portals/FilterModalSolution'
import { useDialogContext } from '../../context/DialogContext'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { useMovieQuerySolution } from '../../solutions/step-01-custom-hooks/useMovieQuerySolution'
import { ThemeProviderSolution } from '../../solutions/step-09-usememo-usecallback-memo/ThemeProviderSolution'
import { DarkModeButtonSolution } from '../../solutions/step-09-usememo-usecallback-memo/DarkModeButtonSolution'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import PropTypes from 'prop-types'
import { ToggleModalSolution } from '../../solutions/step-03-portals/ToggleModalSolution'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

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

const Step09UsememoUsecallbackMemo = () => {
  const dialogContext = useDialogContext()
  return (
    <ThemeProviderSolution>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormWithAutofocusSolution />
            <DetailedHelpBoxSolution />
          </FilterModalSolution>
          <MovieListContainer preloadedMoviesForDefaultYear={[]} />
        </FilterStateProviderSolution>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundarySolution>
    </ThemeProviderSolution>
  )
}

export default Step09UsememoUsecallbackMemo
