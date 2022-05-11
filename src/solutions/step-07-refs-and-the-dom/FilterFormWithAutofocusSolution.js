import { forwardRef, useEffect, useRef } from 'react'
import { useFilterStateSolution } from '../step-02-context/FilterStateProviderSolution'

const FancyInput = forwardRef((props, ref) => {
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

FancyInput.displayName = 'FancyInput'

export const FilterFormWithAutofocusSolution = () => {
  const filterState = useFilterStateSolution()
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()

    const parsed = Number(inputRef.current.value)

    if (Number.isInteger(parsed)) {
      filterState.setYear(parsed)
    }
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

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
