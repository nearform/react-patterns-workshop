import { useEffect } from 'react'

export const ExampleComponentWithErrror = () => {
  useEffect(() => {
    throw new Error("I'm an error")
  }, [])

  return null
}
