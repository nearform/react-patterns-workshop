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
      {discoverQuery.data.results.map(result => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <img
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            alt={result.title}
            width={100}
            height={100}
          />
        </div>
      ))}
    </div>
  )
}

export default Step1ServerState
