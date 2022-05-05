import { useFilterStateSolution } from '../step-02-context/FilterStateContextSolution.jsx'
import { useRef } from 'react'

export const FilterFormSolution = () => {
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
        <input type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
