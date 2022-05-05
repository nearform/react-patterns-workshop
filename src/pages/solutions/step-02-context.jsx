import { SidebarLayout } from '../../components/SidebarLayout/SidebarLayout'
import { FilterFormChallenge } from '../../challenges/step-03-uncontrolled-components/FilterFormChallenge'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { MovieList } from '../../components/MovieList/MovieList.jsx'

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
    <FilterStateProviderSolution>
      <SidebarLayout leftColumn={<FilterFormChallenge />}>
        <MovieListContainer />
      </SidebarLayout>
    </FilterStateProviderSolution>
  )
}

export default Step02Context
