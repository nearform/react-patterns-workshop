import { MovieList } from '../components/MovieList/MovieList'
import { ToggleModalChallenge } from '../challenges/step-03-portals/ToggleModalChallenge'
import { ErrorBoundaryChallenge } from '../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../challenges/step-02-context/FilterStateProviderChallenge'
import { FilterModalChallenge } from '../challenges/step-03-portals/FilterModalChallenge'
import { DetailedHelpBoxChallenge } from '../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { useModal } from '../context/ModalContext'
import { FilterFormWithAutofocusChallenge } from '../challenges/step-07-refs-and-the-dom/FilterFormAutofocusChallenge'
import { ThemeProviderChallenge } from '../challenges/step-09-usememo-memo/ThemeProviderChallenge'
import { ModalBg } from '../components/ModalBg/ModalBg'
import PropTypes from 'prop-types'
import { useMovieQueryChallenge } from '../challenges/step-01-custom-hooks/useMovieQueryChallenge'
import { DarkModeButtonChallenge } from '../challenges/step-09-usememo-memo/DarkModeButtonChallenge'

const MovieListContainer = ({ preloadedMoviesForDefaultYear }) => {
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return <p>No data yet -- but the application is working! Keep following the slides for further instructions.</p>
  }

  return (
    <MovieList
      year={filterState.year}
      filterButton={
        <ToggleModalChallenge
          year={filterState.year}
          onChangeYear={filterState.setYear}
        />
      }
      items={movieQuery.data}
      toggleDarkModeButton={<DarkModeButtonChallenge />}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const MovieFinderApp = ({ preloadedMovies }) => {
  const dialogContext = useModal()
  return (
    <ThemeProviderChallenge>
      <ErrorBoundaryChallenge>
        <FilterStateProviderChallenge>
          <FilterModalChallenge>
            <FilterFormWithAutofocusChallenge />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer preloadedMoviesForDefaultYear={preloadedMovies} />
        </FilterStateProviderChallenge>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundaryChallenge>
    </ThemeProviderChallenge>
  )
}

export default MovieFinderApp
