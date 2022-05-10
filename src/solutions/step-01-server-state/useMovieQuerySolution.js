import { useEffect, useState } from 'react'
import { DEFAULT_YEAR } from '../../constants'

export const useMovieQuerySolution = ({ year = DEFAULT_YEAR }, firstPage) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState(firstPage)

  const pageNumber = firstPage ? 2 : 1

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(
          `/api/discover?page=${pageNumber}&year=${year}`
        )
        const data = await response.json()
        setMovieData(data.results)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [pageNumber, year])

  return {
    data: movieData,
    isLoading
  }
}
