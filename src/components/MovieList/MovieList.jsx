export const MovieList = ({ year, queryData }) => {
  return (
    <div>
      <h1>Action movies {year && year}</h1>
      <ul>
        {queryData.results.map(result => (
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
