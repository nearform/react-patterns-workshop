import { FlexContainer } from '../FlexContainer/FlexContainer.jsx'
import { useDialog } from '../../providers/DialogProvider.js'
import styles from './MovieListWrapper.module.css'

export const MovieListWrapper = ({ year, children }) => {
  const dialog = useDialog()
  return (
    <div className={styles.container}>
      <FlexContainer>
        <h1>Action movies {year && `from ${year}`}</h1>
        <div>
          <button
            onClick={() => {
              dialog.setIsOpen(!dialog.isOpen)
            }}
          >
            {dialog.isOpen ? 'Hide filters' : 'Show filters'}
          </button>
        </div>
      </FlexContainer>
      {children}
    </div>
  )
}
