import { Flex } from '../Flex/Flex'
import styles from './MovieList.module.css'
import PropTypes from 'prop-types'
import { Card } from '../Card/Card'
import clsx from 'clsx'
import { useTheme } from '../../context/ThemeContext'
import { Stack } from '../Stack/Stack'

export function MovieList({ filterButton, toggleDarkModeButton, items, year }) {
  const { isDarkMode } = useTheme()

  return (
    <div className={clsx(styles.container, isDarkMode && styles.darkMode)}>
      <Flex>
        <h1>Movies {year && `from ${year}`}</h1>
        <div>
          {toggleDarkModeButton} {filterButton}
        </div>
      </Flex>
      <Stack>
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
      </Stack>
      )
    </div>
  )
}

MovieList.propTypes = {
  filterButton: PropTypes.node,
  year: PropTypes.number,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      image: PropTypes.string
    })
  ).isRequired
}