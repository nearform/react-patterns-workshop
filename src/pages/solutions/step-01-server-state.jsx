import { SidebarLayout } from '../../components/SidebarLayout/SidebarLayout'
import { FilterFormChallenge } from '../../challenges/step-03-uncontrolled-components/FilterFormChallenge'
import { FilterStateProviderChallenge } from '../../challenges/step-02-context/FilterStateProviderChallenge.js'
import { MovieList } from '../../components/MovieList/MovieList.jsx'
import { ErrorBoundaryChallenge } from '../../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { useFilterStateChallenge } from '../../challenges/step-02-context/useFilterStateChallenge.js'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'

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
        <SidebarLayout leftColumn={<FilterFormChallenge />}>
          <MovieListContainer />
        </SidebarLayout>
      </FilterStateProviderChallenge>
    </ErrorBoundaryChallenge>
  )
}

export default Step01ServerState
