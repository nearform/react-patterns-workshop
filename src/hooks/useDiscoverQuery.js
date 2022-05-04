import { useQuery } from 'react-query'

export const useDiscoverQuery = ({ genres = [], page = 1, year }) =>
  useQuery(['discover', genres, page, year], () => {
    const queryParamsString = `/api/discover?${genres
      .map(genre => 'genres=' + genre)
      .join('&')}&page=${page}&year=${year}`

    return fetch(queryParamsString).then(response => response.json())
  })
