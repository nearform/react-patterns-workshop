import { useMovieQuerySolution } from '../../solutions/step-01-custom-hooks/useMovieQuerySolution'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateProviderSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterModalChallenge } from '../../challenges/step-03-portals/FilterModalChallenge'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { ToggleModalChallenge } from '../../challenges/step-03-portals/ToggleModalChallenge'
import { useDialogContext } from '../../context/DialogContext'
import { FilterFormSolution } from '../../solutions/step-05-uncontrolled-components/FilterFormSolution'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import { ThemeProviderChallenge } from '../../challenges/step-09-useMemo-useCallback-memo/ThemeProviderChallenge'
import { DarkModeButtonChallenge } from '../../challenges/step-09-useMemo-useCallback-memo/DarkModeButtonChallenge'
import PropTypes from 'prop-types'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieList
      items={movieQuery.data}
      year={filterState.year}
      filterButton={
        <ToggleModalChallenge isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
      toggleDarkModeButton={<DarkModeButtonChallenge />}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const Step04ErrorBoundaries = () => {
  const dialogContext = useDialogContext()
  return (
    <ThemeProviderChallenge>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalChallenge>
            <FilterFormSolution />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer preloadedMoviesForDefaultYear={[]} />
        </FilterStateProviderSolution>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundarySolution>
    </ThemeProviderChallenge>
  )
}

export default Step04ErrorBoundaries
