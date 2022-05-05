import { SidebarLayout } from '../../components/SidebarLayout/SidebarLayout'
import { FilterFormChallenge } from '../../challenges/step-03-uncontrolled-components/FilterFormChallenge'
import { FilterStateProviderChallenge } from '../../challenges/step-02-context/FilterStateProviderChallenge.js'
import { useFilterStateSolution } from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList.jsx'
import { useMovieQueryChallenge } from '../../challenges/step-01-server-state/useMovieQueryChallenge.js'

const MovieListContainer = () => {
  const filterState = useFilterStateSolution()
  const movieQuery = useMovieQueryChallenge(filterState)

  if (!movieQuery.data) {
    return null
  }

  return <MovieList year={filterState.year} queryData={movieQuery.data} />
}

const Step01ServerState = () => {
  return (
    <FilterStateProviderChallenge>
      <SidebarLayout leftColumn={<FilterFormChallenge />}>
        <MovieListContainer />
      </SidebarLayout>
    </FilterStateProviderChallenge>
  )
}

export default Step01ServerState
