import { FilterStateProviderChallenge } from '../../challenges/step-02-context/FilterStateProviderChallenge.js'
import { MovieList } from '../../components/MovieList/MovieList.jsx'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { useFilterStateChallenge } from '../../challenges/step-02-context/useFilterStateChallenge.js'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import { FilterModalChallenge } from '../../challenges/step-05-portals/FilterModalChallenge.js'
import { FilterFormFinalChallenge } from '../../challenges/step-12-third-party-libs/FilterFormFinalChallenge'

const MovieListContainer = () => {
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQuerySolution(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const Step01ServerState = () => {
  return (
    <ErrorBoundaryChallenge>
      <FilterStateProviderChallenge>
        <FilterModalChallenge>
          <FilterFormFinalChallenge />
        </FilterModalChallenge>
        <MovieListContainer />
      </FilterStateProviderChallenge>
    </ErrorBoundaryChallenge>
  )
}

export default Step01ServerState
