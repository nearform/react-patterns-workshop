import { useEffect, useState } from 'react'
import { DEFAULT_YEAR } from '../../constants'

export const useMovieQuerySolution = ({ year = DEFAULT_YEAR }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`/api/movies?year=${year}`)
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
