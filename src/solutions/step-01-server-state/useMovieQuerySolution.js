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
        `/api/discover?page=${currentPage}&year=${year}&genre=Action`
      ).then(response => response.json())
      setIsLoading(false)
      setMovieData(curr =>
        curr ? [...curr, ...response.results] : response.results
      )
      setTotalPages(response.total_pages)
    }
    fetchData()
  }, [currentPage, year])

  return {
    data: movieData,
    isLoading,
    hasNextPage: totalPages > currentPage,
    loadNextPage: () => {
      console.log('Load next page')
      setCurrentPage(curr => curr + 1)
    }
  }
}
