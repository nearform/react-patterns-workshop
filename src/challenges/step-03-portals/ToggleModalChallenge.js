import { Flex } from '../../components/Flex/Flex'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { useState } from 'react'

export const ToggleModalChallenge = ({ year, onChangeYear }) => {
  const [updatedYear, setUpdatedYear] = useState(year)
  return (
    <form
      onSubmit={evt => {
        evt.preventDefault()
        onChangeYear(year)
      }}
    >
      <Card>
        <Flex>
          <input
            type="number"
            onChange={evt => {
              setUpdatedYear(evt.currentTarget.value)
            }}
            value={updatedYear}
          />
          <Button variant="ghost">Go</Button>
        </Flex>
      </Card>
    </form>
  )
}
