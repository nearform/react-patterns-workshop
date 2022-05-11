import { useCallback, useState } from 'react'

export const useReload = () => {
  const [, setState] = useState()
  return useCallback(() => {
    setState({})
  }, [])
}
