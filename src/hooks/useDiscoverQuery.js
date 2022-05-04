import { useQuery } from 'react-query'

export const useDiscoverQuery = ({ genres = [], page = 1 }) =>
  useQuery(['discover', genres, page], () =>
    fetch(
      `/api/discover?${genres
        .map(genre => `genres=${genre}`)
        .join('&')}&page=${page}`
    ).then(response => response.json())
  )
