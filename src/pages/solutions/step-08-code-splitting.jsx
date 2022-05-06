import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { CodeSplittingSolution } from '../../solutions/step-08-code-splitting/CodeSplitttingSolution.js'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const Step08CodeSplitting = () => {
  return (
    <ErrorBoundarySolution>
      <FilterStateProviderSolution>
        <FilterModalSolution>
          <FilterFormWithAutofocusSolution />
          <CodeSplittingSolution />
        </FilterModalSolution>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundarySolution>
  )
}

export default Step08CodeSplitting
