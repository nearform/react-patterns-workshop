import { forwardRef, useRef } from 'react'
import { useFilterStateSolution } from '../step-02-context/FilterStateProviderSolution'

const FancyInput = forwardRef(function FancyInput(props, ref) {
  return (
    <input
      {...props}
      ref={ref}
      style={{
        padding: 8,
        fontWeight: 'bold',
        border: '1px solid grey'
      }}
    />
  )
})

export const FilterFormWithStyledInputSolution = () => {
  const filterState = useFilterStateSolution()
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()

    const parsed = Number(inputRef.current.value)

    if (Number.isInteger(parsed)) {
      filterState.setYear(parsed)
    }
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
