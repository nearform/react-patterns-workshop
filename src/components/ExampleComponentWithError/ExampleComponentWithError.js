import { useEffect } from 'react'

export const ExampleComponentWithError = () => {
  useEffect(() => {
    throw new Error("I'm an error")
  }, [])

  return null
}
