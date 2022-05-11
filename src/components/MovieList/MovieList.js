import { Flex } from '../Flex/Flex'
import styles from './MovieList.module.css'
import PropTypes from 'prop-types'
import { Card } from '../Card/Card'
import clsx from 'clsx'
import { useTheme } from '../../context/ThemeContext'

export function MovieList({
  title,
  filterButton,
  toggleDarkModeButton,
  items
}) {
  const { isDarkMode } = useTheme()

  return (
    <div className={clsx(styles.container, isDarkMode && styles.darkMode)}>
      <Flex>
        {title}
        <div>
          {toggleDarkModeButton} {filterButton}
        </div>
      </Flex>
      {}
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
