import { FilterFormChallenge } from '../step-05-uncontrolled-components/FilterFormChallenge'

const FancyInput = props => {
  return (
    <input
      {...props}
      style={{
        padding: 8,
        fontWeight: 'bold',
        border: '1px solid grey'
      }}
    />
  )
}

export const FilterFormWithStyledInputChallenge = () => {
  // To get started copy and paste the code from the previous step
  // and amend it to use our `FancyInput` instead of the plain input
  return <FilterFormChallenge />
}
