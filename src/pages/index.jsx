import { SidebarLayout } from '../components/SidebarLayout/SidebarLayout'
import { FilterFormChallenge } from '../challenges/step-03-uncontrolled-components/FilterFormChallenge'
import { useFilterStateChallenge } from '../challenges/step-02-context/useFilterStateChallenge.js'
import { useMovieQueryChallenge } from '../challenges/step-01-server-state/useMovieQueryChallenge.js'
import { FilterStateProviderChallenge } from '../challenges/step-02-context/FilterStateProviderChallenge'
import { ErrorBoundaryChallenge } from '../challenges/step-04-error-boundaries/ErrorBoundaryChallenge'
import { MovieList } from '../components/MovieList/MovieList.jsx'

const MovieListContainer = () => {
  const filterState = useFilterStateChallenge()
  const movieQuery = useMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const MovieExplorerApp = () => {
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

export default MovieExplorerApp
