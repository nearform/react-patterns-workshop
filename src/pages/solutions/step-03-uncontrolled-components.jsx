import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge.js'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge.js'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const Step03UncontrolledComponents = () => {
  return (
    <ErrorBoundaryChallenge>
      <FilterStateProviderSolution>
        <FilterModalChallenge>
          <FilterFormSolution />
          <DetailedHelpBoxChallenge />
        </FilterModalChallenge>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundaryChallenge>
  )
}

export default Step03UncontrolledComponents
