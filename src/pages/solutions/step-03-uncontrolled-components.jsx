import { SidebarLayout } from '../../components/SidebarLayout/SidebarLayout'
import { useMovieQuerySolution } from '../../solutions/step-01-server-state/useMovieQuerySolution.js'
import {
  FilterStateProviderSolution,
  useFilterStateSolution
} from '../../solutions/step-02-context/FilterStateContextSolution.jsx'
import { FilterFormSolution } from '../../solutions/step-03-uncontrolled-components/FilterFormSolution'
import { MovieList } from '../../components/MovieList/MovieList'

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
    <FilterStateProviderSolution>
      <SidebarLayout leftColumn={<FilterFormSolution />}>
        <MovieListContainer />
      </SidebarLayout>
    </FilterStateProviderSolution>
  )
}

export default Step03UncontrolledComponents
