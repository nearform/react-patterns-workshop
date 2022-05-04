import { useQuery } from 'react-query'

export const useGenresQuery = () =>
  useQuery(['genres'], () =>
    fetch('/api/genres').then(response => response.json())
  )
