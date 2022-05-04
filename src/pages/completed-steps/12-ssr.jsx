import { useDiscoverQuery } from '../../hooks/useDiscoverQuery.js'
import Image from 'next/image'

const Step12SSR = () => {
  const discoverQuery = useDiscoverQuery({ genres: [80, 35], page: 2 })
  if (!discoverQuery.data) {
    return null
  }
  return (
    <div>
      {discoverQuery.data.results.map(result => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <Image
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

export default Step12SSR
