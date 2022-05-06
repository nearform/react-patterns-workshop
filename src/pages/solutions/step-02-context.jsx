import { FilterFormChallenge } from '../../challenges/step-03-uncontrolled-components/FilterFormChallenge'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList.jsx'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge.js'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const Step02Context = () => {
  return (
    <ErrorBoundaryChallenge>
      <FilterStateProviderSolution>
        <FilterModalChallenge>
          <FilterFormChallenge />
        </FilterModalChallenge>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundaryChallenge>
  )
}

export default Step02Context
