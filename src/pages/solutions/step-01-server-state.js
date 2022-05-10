import {
  FilterStateProviderChallenge,
  useFilterStateChallenge
} from '../../challenges/step-02-context/FilterStateProviderChallenge'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge'
import { FilterFormFinalChallenge } from '../../challenges/step-12-third-party-libs/FilterFormFinalChallenge'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { MovieListChallenge } from '../../challenges/step-09-list-virtualization/MovieListChallenge'
import { DialogProviderChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/DialogProviderChallenge'
import { MovieListTitleChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/MovieListTitleChallenge'
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton'
import { useDialogContext } from '../../context/DialogContext'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQuerySolution(filterState)

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
