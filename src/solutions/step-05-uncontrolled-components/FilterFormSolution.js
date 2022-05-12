import { useFilterStateSolution } from '../step-02-context/FilterStateProviderSolution'
import { useRef } from 'react'
import { Stack } from '../../components/Stack/Stack'
import { Flex } from '../../components/Flex/Flex'
import { Button } from '../../components/Button/Button'

export const FilterFormSolution = () => {
  // If you copy and paste this solution into your challenge file
  // please change this hook to use `useFilterStateChallenge`
  const filterState = useFilterStateSolution()
  const inputRef = useRef()

  const handleSubmit = event => {
    event.preventDefault()

    if (inputRef.current.value) {
      filterState.setYear(inputRef.current.valueAsNumber)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Flex>
          <label>Year:</label>
          <input name="year" type="number" ref={inputRef} />
        </Flex>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
