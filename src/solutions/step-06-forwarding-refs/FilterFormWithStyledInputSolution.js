import { forwardRef, useRef } from 'react'
import { useFilterStateSolution } from '../step-02-context/FilterStateContextSolution.jsx'

const FancyInput = forwardRef((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      style={{
        padding: '16px',
        fontWeight: 'bold',
        border: '1px solid azure',
        fontSize: '24px'
      }}
    />
  )
})

FancyInput.displayName = 'FancyInput'

export const FilterFormWithStyledInputSolution = () => {
  const filterState = useFilterStateSolution()
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()
    inputRef.current.value && filterState.setYear(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Year:
        <FancyInput type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
