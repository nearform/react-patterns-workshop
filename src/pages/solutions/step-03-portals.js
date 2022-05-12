import { useMovieQuerySolution } from '../../solutions/step-01-custom-hooks/useMovieQuerySolution'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateProviderSolution'
import { FilterFormSolution } from '../../solutions/step-05-uncontrolled-components/FilterFormSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterModalSolution } from '../../solutions/step-03-portals/FilterModalSolution'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { useModal } from '../../context/ModalContext'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import { ThemeProviderChallenge } from '../../challenges/step-09-useMemo-memo/ThemeProviderChallenge'
import { DarkModeButtonChallenge } from '../../challenges/step-09-useMemo-memo/DarkModeButtonChallenge'
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
      toggleDarkModeButton={<DarkModeButtonChallenge />}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const Step03Portals = () => {
  const dialogContext = useModal()
  return (
    <ThemeProviderChallenge>
      <ErrorBoundarySolution>
        <FilterStateProviderSolution>
          <FilterModalSolution>
            <FilterFormSolution />
            <DetailedHelpBoxChallenge />
          </FilterModalSolution>
          <MovieListContainer preloadedMoviesForDefaultYear={[]} />
        </FilterStateProviderSolution>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundarySolution>
    </ThemeProviderChallenge>
  )
}

export default Step03Portals
