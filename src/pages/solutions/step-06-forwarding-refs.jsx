import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'
import { FilterFormWithStyledInputSolution } from '../../solutions/step-06-forwarding-refs/FilterFormWithStyledInputSolution'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const StepO6ForwardingRefs = () => {
  return (
    <ErrorBoundarySolution>
      <FilterStateProviderSolution>
        <FilterModalSolution>
          <FilterFormWithStyledInputSolution />
        </FilterModalSolution>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundarySolution>
  )
}

export default StepO6ForwardingRefs
