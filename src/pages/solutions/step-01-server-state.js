import { useQuery } from 'react-query'

const Step1ServerState = () => {
  const discoverQuery = useQuery(['discovery'], () =>
    fetch('/api/discover?page=1&year=2020&genre=Action').then(response =>
      response.json()
    )
  )

  if (!discoverQuery.data) {
    return null
  }

  return (
    <div>
      <h1>Action movies from 2020</h1>
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

export default Step1ServerState
