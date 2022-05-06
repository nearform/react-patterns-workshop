import { FlexContainer } from '../FlexContainer/FlexContainer'
import { useDialog } from '../../providers/DialogProvider.js'

export const MovieListWrapper = ({ year, children }) => {
  const dialog = useDialog()
  return (
    <div>
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
