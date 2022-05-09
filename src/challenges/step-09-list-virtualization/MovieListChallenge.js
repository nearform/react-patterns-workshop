import { FlexContainer } from '../../components/FlexContainer/FlexContainer.jsx'
import { Card } from '../../components/Card/Card.jsx'

export const MovieListChallenge = ({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage
}) => {
  if (!items) {
    return null
  }
  return (
    <div>
      {items.map(result => (
        <Card key={result.id}>
          <FlexContainer>
            <img
              src={result.image}
              alt={result.title}
              width={100}
              height={100}
            />
            <h3>{result.title}</h3>
          </FlexContainer>
        </Card>
      ))}
    </div>
  )
}
