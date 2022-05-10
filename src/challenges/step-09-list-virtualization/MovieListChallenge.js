import { Flex } from '../../components/Flex/Flex'
import { Card } from '../../components/Card/Card'
import { memo } from 'react'

export const MovieListChallenge = memo(function MovieListChallenge({
  hasNextPage,
  isNextPageLoading,
  items,
  loadNextPage
}) {
  if (!items) {
    return null
  }
  return (
    <div>
      {items.map(result => (
        <Card key={result.id}>
          <Flex>
            <img
              src={result.image}
              alt={result.title}
              width={100}
              height={100}
            />
            <h3>{result.title}</h3>
          </Flex>
        </Card>
      ))}
    </div>
  )
})
