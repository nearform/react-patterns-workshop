import { MovieList } from '../components/MovieList/MovieList'
import { ToggleFiltersButton } from '../components/ToggleFiltersButton/ToggleFiltersButton'
import { ErrorBoundaryChallenge } from '../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../challenges/step-02-context/FilterStateProviderChallenge'
import { FilterModalChallenge } from '../challenges/step-03-portals/FilterModalChallenge'
import { DetailedHelpBoxChallenge } from '../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { useDialogContext } from '../context/DialogContext'
import { FilterFormWithAutofocusChallenge } from '../challenges/step-07-refs-and-the-dom/FilterFormAutofocusChallenge'
import { ThemeProviderChallenge } from '../challenges/step-09-useMemo-useCallback-memo/ThemeProviderChallenge'
import { ModalBg } from '../components/ModalBg/ModalBg'
import PropTypes from 'prop-types'
import { useMovieQueryChallenge } from '../challenges/step-01-custom-hooks/useMovieQueryChallenge'

const MovieListContainer = ({ preloadedMoviesForDefaultYear }) => {
  const dialog = useDialogContext()
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieList
      year={filterState.year}
      filterButton={
        <ToggleFiltersButton isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
      items={movieQuery.data}
    />
  )
}

MovieListContainer.propTypes = {
  preloadedMoviesForDefaultYear: PropTypes.array
}

const MovieFinderApp = () => {
  const dialogContext = useDialogContext()
  return (
    <ThemeProviderChallenge>
      <ErrorBoundaryChallenge>
        <FilterStateProviderChallenge>
          <FilterModalChallenge>
            <FilterFormWithAutofocusChallenge />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer preloadedMoviesForDefaultYear={[]} />
        </FilterStateProviderChallenge>
        {dialogContext.isOpen && <ModalBg />}
      </ErrorBoundaryChallenge>
    </ThemeProviderChallenge>
  )
}

export default MovieFinderApp