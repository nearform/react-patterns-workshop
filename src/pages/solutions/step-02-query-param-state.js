import { useQuery } from 'react-query'
import { NumberParam, useQueryParams } from 'next-query-params'

const useFilterState = () => useQueryParams({ year: NumberParam })

const Step3QueryParamState = () => {
  const [filterState] = useFilterState()

  const discoverQuery = useQuery(['discovery', filterState.year], () =>
    fetch(`/api/discover?page=1&year=${filterState.year}&genre=Action`).then(
      response => response.json()
    )
  )

  if (!discoverQuery.data) {
    return null
  }

  return (
    <div>
      <h1>Action movies from {filterState.year}</h1>
      <ul>
        {discoverQuery.data.results.map(result => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <img
              src={result.image}
              alt={result.title}
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Step3QueryParamState
