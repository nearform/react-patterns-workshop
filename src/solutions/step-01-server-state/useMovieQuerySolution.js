import { useEffect, useState } from 'react'

export const useMovieQuerySolution = ({ year = 2000 }) => {
  const [totalPages, setTotalPages] = useState()
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
      setMovieData(curr =>
        curr ? [...curr, response.results] : response.results
      )
      setTotalPages(response.total_pages)
    }
    fetchData()
  }, [year])

  return {
    data: movieData,
    isLoading,
    hasNextPage: totalPages > currentPage,
    loadNextPage: () => {
      setCurrentPage(curr => curr++)
    }
  }
}
