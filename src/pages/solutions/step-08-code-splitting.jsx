import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList'
import { ErrorBoundarySolution } from '../../solutions/step-04-error-boundary/ErrorBoundarySolution'
import { FilterFormWithAutofocusSolution } from '../../solutions/step-07-refs-and-the-dom/FilterFormWithAutofocusSolution'
import { FilterModalSolution } from '../../solutions/step-05-portals/FilterModalSolution'
import { DetailedHelpBoxChallenge } from '../../challenges/step-08-code-splitting/DetailedHelpBoxChallenge.js'

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
          <DetailedHelpBoxChallenge />
        </FilterModalSolution>
        <MovieListContainer />
      </FilterStateProviderSolution>
    </ErrorBoundarySolution>
  )
}

export default Step08CodeSplitting
