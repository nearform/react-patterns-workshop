import { useEffect, useState } from 'react'

export const useMovieQuerySolution = () => {
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        '/api/discover?page=1&year=2020&genre=Action'
      ).then(response => response.json())
      setMovieData(response)
    }
    fetchData()
  }, [])

  return {
    data: movieData
  }
}
