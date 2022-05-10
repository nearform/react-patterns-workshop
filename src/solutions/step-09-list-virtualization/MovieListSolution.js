import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList } from 'react-window'
import { Flex } from '../../components/Flex/Flex.js'
import { Card } from '../../components/Card/Card.js'
import AutoSizer from 'react-virtualized-auto-sizer'

export const MovieListSolution = ({
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  hasNextPage,

  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  isNextPageLoading,

  // Array of items loaded so far.
  items,

  // Callback function responsible for loading the next page of items.
  loadNextPage
}) => {
  if (!items) {
    return null
  }

  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage

  // Every row is loaded except for our loading indicator row.
  const isItemLoaded = index => !hasNextPage || index < items.length

  // Render an item or a loading indicator.
  const Item = ({ index, style }) => {
    let content
    if (!isItemLoaded(index)) {
      content = <div>Loading...</div>
    } else {
      const item = items[index]
      content = (
        <Card>
          <Flex>
            <img src={item.image} alt={item.title} width={100} height={100} />
            <h3>{item.title}</h3>
          </Flex>
        </Card>
      )
    }

    return <div style={style}>{content}</div>
  }

  return (
    <AutoSizer>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={isItemLoaded}
          itemCount={itemCount}
          loadMoreItems={loadMoreItems}
        >
          {({ onItemsRendered, ref }) => (
            <FixedSizeList
              itemCount={itemCount}
              onItemsRendered={onItemsRendered}
              ref={ref}
              height={height}
              width={width}
              itemSize={140}
            >
              {Item}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  )
}
