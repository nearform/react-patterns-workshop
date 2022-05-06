import { useEffect, useState } from 'react'

export const useMovieQuerySolution = ({ year = 2000 }) => {
  const [movieData, setMovieData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/discover?page=1&year=${year}&genre=Action`
      ).then(response => response.json())
      setMovieData(response)
    }
    fetchData()
  }, [year])

  return {
    data: movieData
  }
}
