import { useMovieQuerySolution } from '../../solutions/step-01-custom-hooks/useMovieQuerySolution'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateProviderSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { FilterModalSolution } from '../../solutions/step-03-portals/FilterModalSolution'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { useModal } from '../../context/ModalContext'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import PropTypes from 'prop-types'
import { ToggleModalSolution } from '../../solutions/step-03-portals/ToggleModalSolution'
import { DarkModeButtonChallenge } from '../../challenges/step-09-usememo-memo/DarkModeButtonChallenge'
import { ThemeProviderChallenge } from '../../challenges/step-09-usememo-memo/ThemeProviderChallenge'

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
      toggleDarkModeButton={<DarkModeButtonChallenge />}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const Step07RefsAndTheDom = () => {
  const dialogContext = useModal()
  return (
    <ThemeProviderChallenge>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormWithAutofocusSolution />
            <DetailedHelpBoxChallenge />
          </FilterModalSolution>
          <MovieListContainer preloadedMoviesForDefaultYear={[]} />
        </FilterStateProviderSolution>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundarySolution>
    </ThemeProviderChallenge>
  )
}

export default Step07RefsAndTheDom
