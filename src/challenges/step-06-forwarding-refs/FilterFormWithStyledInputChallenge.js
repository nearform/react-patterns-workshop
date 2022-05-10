import { FilterFormChallenge } from '../step-03-uncontrolled-components/FilterFormChallenge'

// Initially this will trigger an error. We will fix it in this step by forwarding
// refs.
const FancyInput = props => {
  return (
    <input
      {...props}
      style={{
        padding: '16px',
        fontWeight: 'bold',
        border: '1px solid azure',
        fontSize: '24px'
      }}
    />
  )
}

export const FilterFormWithStyledInputChallenge = () => {
  // To get started copy and paste the code from step 3 and paste in here
  // and amend it to use our `FancyInput` instead of the plain input
  return <FilterFormChallenge />
}
