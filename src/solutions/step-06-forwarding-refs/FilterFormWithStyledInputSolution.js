import { forwardRef, useRef } from 'react'
import { useFilterStateSolution } from '../step-02-context/FilterStateProviderSolution'
import { Stack } from '../../components/Stack/Stack'
import { Flex } from '../../components/Flex/Flex'
import { Button } from '../../components/Button/Button'

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

export const FilterFormWithStyledInputSolution = () => {
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
          <label htmlFor="year">Year:</label>
          <FancyInput type="number" id="year" ref={inputRef} />
        </Flex>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
