import { Flex } from '../Flex/Flex'
import styles from './MovieList.module.css'
import PropTypes from 'prop-types'
import { Card } from '../Card/Card'

export function MovieList({ title, filterButton, items }) {
  return (
    <div className={styles.container}>
      <Flex>
        {title}
        {filterButton}
      </Flex>
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
    </div>
  )
}

MovieList.propTypes = {
  title: PropTypes.node,
  filterButton: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired
}
