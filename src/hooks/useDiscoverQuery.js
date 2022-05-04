import { useQuery } from 'react-query'

export const useDiscoverQuery = ({ genre }) =>
  useQuery(['discover', genre], () =>
    fetch('/api/discover').then(response => response.json())
  )
