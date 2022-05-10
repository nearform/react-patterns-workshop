import { useEffect, useState } from 'react'
import { DEFAULT_GENRE_ID, DEFAULT_YEAR } from '../../constants.js'

export const useMovieQuerySolution = ({ year = DEFAULT_YEAR }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch(
        `/api/discover?page=1&year=${year}&genre=${DEFAULT_GENRE_ID}`
      ).then(response => response.json())
      setIsLoading(false)
      setMovieData(response.results)
    }
    fetchData()
  }, [year])

  return {
    data: movieData,
    isLoading
  }
}
