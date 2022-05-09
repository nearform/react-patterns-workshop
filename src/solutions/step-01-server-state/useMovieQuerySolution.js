import { useEffect, useMemo, useState } from 'react'

export const useMovieQuerySolution = ({ year = 2000 }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const response = await fetch(
        `/api/discover?page=1&year=${year}&genre=Action`
      ).then(response => response.json())
      setIsLoading(false)
      setMovieData(response.results)
    }
    fetchData()
  }, [currentPage, movieData, year])

  return {
    data: movieData,
    isLoading
  }
}
