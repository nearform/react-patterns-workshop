import { MovieListWrapper } from '../components/MovieListContainer/MovieListWrapper'
import { MovieListTitleChallenge } from '../challenges/step-10-useMemo-useCallback-memo/MovieListTitleChallenge'
import { ToggleFiltersButton } from '../components/ToggleFiltersButton/ToggleFiltersButton'
import { MovieListChallenge } from '../challenges/step-09-list-virtualization/MovieListChallenge'
import { DialogProviderChallenge } from '../challenges/step-10-useMemo-useCallback-memo/DialogProviderChallenge'
import { ErrorBoundaryChallenge } from '../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../challenges/step-02-context/FilterStateProviderChallenge'
import { FilterModalChallenge } from '../challenges/step-05-portals/FilterModalChallenge'
import { FilterFormFinalChallenge } from '../challenges/step-12-third-party-libs/FilterFormFinalChallenge'
import { DetailedHelpBoxChallenge } from '../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { useDialogContext } from '../context/DialogContext'
import { useMovieQueryChallenge } from '../challenges/step-01-server-state/useMovieQueryChallenge'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return null
  }

  return (
    <MovieListWrapper
      title={<MovieListTitleChallenge filterState={filterState} />}
      filterButton={
        <ToggleFiltersButton isOpen={dialog.isOpen} onToggle={dialog.toggle} />
      }
    >
      <MovieListChallenge
        items={movieQuery.data}
        hasNextPage={movieQuery.hasNextPage}
        isNextPageLoading={movieQuery.isLoading}
        loadNextPage={movieQuery.loadNextPage}
      />
    </MovieListWrapper>
  )
}

const Step01ServerState = () => {
  return (
    <DialogProviderChallenge>
      <ErrorBoundaryChallenge>
        <FilterStateProviderChallenge>
          <FilterModalChallenge>
            <FilterFormFinalChallenge />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer />
        </FilterStateProviderChallenge>
      </ErrorBoundaryChallenge>
    </DialogProviderChallenge>
  )
}

export default Step01ServerState
