import { FlexContainer } from '../FlexContainer/FlexContainer'
import { useDialog } from '../../providers/DialogProvider.js'

export const MovieList = ({ year, queryData }) => {
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
      <ul>
        {queryData.results.map(result => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <img
              src={result.image}
              alt={result.title}
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
