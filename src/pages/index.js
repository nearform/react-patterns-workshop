import { MovieList } from '../components/MovieList/MovieList'
import { MovieListTitleChallenge } from '../challenges/step-09-useMemo-useCallback-memo/MovieListTitleChallenge'
import { ToggleFiltersButton } from '../components/ToggleFiltersButton/ToggleFiltersButton'
import { DialogProviderChallenge } from '../challenges/step-09-useMemo-useCallback-memo/DialogProviderChallenge'
import { ErrorBoundaryChallenge } from '../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../challenges/step-02-context/FilterStateProviderChallenge'
import { FilterModalChallenge } from '../challenges/step-05-portals/FilterModalChallenge'
import { DetailedHelpBoxChallenge } from '../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { useDialogContext } from '../context/DialogContext'
import { useMovieQueryChallenge } from '../challenges/step-01-server-state/useMovieQueryChallenge'
import { FilterFormWithAutofocusChallenge } from '../challenges/step-07-refs-and-the-dom/FilterFormAutofocusChallenge'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieList
      title={<MovieListTitleChallenge filterState={filterState} />}
      filterButton={
        <ToggleFiltersButton isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
      items={movieQuery.data}
    />
  )
}

const Step01ServerState = () => {
  return (
    <DialogProviderChallenge>
      <ErrorBoundaryChallenge>
        <FilterStateProviderChallenge>
          <FilterModalChallenge>
            <FilterFormWithAutofocusChallenge />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer />
        </FilterStateProviderChallenge>
      </ErrorBoundaryChallenge>
    </DialogProviderChallenge>
  )
}

export default Step01ServerState
