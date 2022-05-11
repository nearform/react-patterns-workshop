import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../../challenges/step-02-context/FilterStateProviderChallenge'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { FilterModalChallenge } from '../../challenges/step-03-portals/FilterModalChallenge'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { ToggleModalChallenge } from '../../challenges/step-03-portals/ToggleModalChallenge'
import { useDialogContext } from '../../context/DialogContext'
import { FilterFormWithAutofocusChallenge } from '../../challenges/step-07-refs-and-the-dom/FilterFormAutofocusChallenge'
import { ModalBg } from '../../components/ModalBg/ModalBg'
import { ThemeProviderChallenge } from '../../challenges/step-09-useMemo-useCallback-memo/ThemeProviderChallenge'
import { DarkModeButtonChallenge } from '../../challenges/step-09-useMemo-useCallback-memo/DarkModeButtonChallenge'
import { useMovieQueryWithPreloadedData } from '../../hooks/useMovieQueryWithPreloadedData'
import PropTypes from 'prop-types'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQueryWithPreloadedData(filterState)

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

const Step01CustomHooks = () => {
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

export default Step01CustomHooks
