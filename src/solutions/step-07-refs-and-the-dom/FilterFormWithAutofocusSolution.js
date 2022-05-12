import { forwardRef, useEffect, useRef } from 'react'
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

export const FilterFormWithAutofocusSolution = () => {
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

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <Flex>
          <label htmlFor="year">Year:</label>
          <FancyInput id="year" type="number" ref={inputRef} />
        </Flex>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Stack>
    </form>
  )
}
