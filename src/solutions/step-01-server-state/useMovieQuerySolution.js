import { useEffect, useState } from 'react'
import { DEFAULT_YEAR } from '../../constants'

export const useMovieQuerySolution = ({ year = DEFAULT_YEAR }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(`/api/discover?page=1&year=${year}`)
        const data = await response.json()
        setMovieData(data.results)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [year])

  return {
    data: movieData,
    isLoading
  }
}
