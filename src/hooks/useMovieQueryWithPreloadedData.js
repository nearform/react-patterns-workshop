import { useEffect, useState } from 'react'
import { DEFAULT_YEAR } from '../constants'

export const useMovieQueryWithPreloadedData = (
  { year = DEFAULT_YEAR },
  preloadedDataForDefaultYear
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [movieData, setMovieData] = useState(preloadedDataForDefaultYear)

  useEffect(() => {
    // Don't fetch if data already available
    if (year === DEFAULT_YEAR && preloadedDataForDefaultYear) {
      return
    }
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
  }, [preloadedDataForDefaultYear, year])

  return {
    data: movieData,
    isLoading
  }
}
