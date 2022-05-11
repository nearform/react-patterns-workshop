import { useFilterStateSolution } from '../step-02-context/FilterStateProviderSolution'
import { useRef } from 'react'

export const FilterFormSolution = () => {
  const filterState = useFilterStateSolution()
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()

    if (!inputRef.current.value) {
      return
    }

    const parsed = Number(inputRef.current.value)

    if (Number.isInteger(parsed)) {
      filterState.setYear(parsed)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Year:
        <input name="year" type="text" ref={inputRef} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
