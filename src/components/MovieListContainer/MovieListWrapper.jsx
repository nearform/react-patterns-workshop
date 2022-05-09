import { FlexContainer } from '../FlexContainer/FlexContainer.jsx'
import styles from './MovieListWrapper.module.css'
import { useDialogContext } from '../../context/DialogContext.js'
import { MovieListTitleChallenge } from '../../challenges/step-10-useMemo-useCallback-memo/MovieListTitleChallenge'

export const MovieListWrapper = ({ year, children }) => {
  const dialog = useDialogContext()

  return (
    <div className={styles.container}>
      <FlexContainer>
        <MovieListTitleChallenge year={year} />
        <button
          onClick={() => {
            dialog.toggle()
          }}
        >
          {dialog.isOpen ? 'Hide filters' : 'Show filters'}
        </button>
      </FlexContainer>
      {children}
    </div>
  )
}
