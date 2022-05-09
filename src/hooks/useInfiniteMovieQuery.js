import { useEffect, useMemo, useState } from 'react'

export const useInfiniteMovieQuery = ({ year = 2000 }, preloadedFirstPage) => {
  const [totalPages, setTotalPages] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState({
    [year]: preloadedFirstPage ? { 1: preloadedFirstPage } : null
  })

  useEffect(() => {
    const fetchData = async () => {
      if (movieData[year] && movieData[year][currentPage]) {
        // Already fetched
        return
      }
      setIsLoading(true)
      const response = await fetch(
        `/api/discover?page=${currentPage}&year=${year}&genre=Action`
      ).then(response => response.json())
      setIsLoading(false)

      setMovieData(currentMovieData => {
        const yearData = currentMovieData[year] || {}
        return {
          [year]: { ...yearData, [currentPage]: response.results }
        }
      })

      setTotalPages(response.total_pages)
    }
    fetchData()
  }, [currentPage, movieData, year])

  const data = useMemo(() => {
    return movieData[year] ? Object.values(movieData[year]).flat() : []
  }, [movieData, year])

  return {
    data,
    isLoading,
    hasNextPage: totalPages > currentPage,
    loadNextPage: () => {
      setCurrentPage(curr => curr + 1)
    }
  }
}
