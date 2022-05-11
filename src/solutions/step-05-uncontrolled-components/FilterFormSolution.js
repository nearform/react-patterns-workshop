import { useFilterStateSolution } from '../step-02-context/FilterStateProviderSolution'
import { useRef } from 'react'
import { Stack } from '../../components/Stack/Stack'
import { Flex } from '../../components/Flex/Flex'
import { Button } from '../../components/Button/Button'

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
      <Stack>
        <Flex>
          <label>Year:</label>
          <input name="year" type="text" ref={inputRef} />
        </Flex>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
