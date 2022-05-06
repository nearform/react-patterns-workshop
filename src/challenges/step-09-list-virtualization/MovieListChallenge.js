export const MovieListChallenge = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage
}) => {
  return (
    <ul>
      {items.map(result => (
        <li key={result.id}>
          <h3>{result.title}</h3>
          <img src={result.image} alt={result.title} width={100} height={100} />
        </li>
      ))}
    </ul>
  )
}
