import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution'
import { MovieListWrapper } from '../../components/MovieListContainer/MovieListWrapper'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge'
import { MovieListChallenge } from '../../challenges/step-09-list-virtualization/MovieListChallenge'
import { DialogProviderChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/DialogProviderChallenge'
import { MovieListTitleChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/MovieListTitleChallenge'
import { ToggleFiltersButton } from '../../components/ToggleFiltersButton/ToggleFiltersButton'
import { useDialogContext } from '../../context/DialogContext'

const MovieListContainer = () => {
  const dialog = useDialogContext()
  const filterState = useFilterStateSolution()
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

const Step03UncontrolledComponents = () => {
  return (
    <DialogProviderChallenge>
      <ErrorBoundaryChallenge>
        <FilterStateProviderSolution>
          <FilterModalChallenge>
            <FilterFormSolution />
            <DetailedHelpBoxChallenge />
          </FilterModalChallenge>
          <MovieListContainer />
        </FilterStateProviderSolution>
      </ErrorBoundaryChallenge>
    </DialogProviderChallenge>
  )
}

export default Step03UncontrolledComponents
