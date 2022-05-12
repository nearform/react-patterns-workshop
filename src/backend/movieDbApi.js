const BASE_URL = 'https://api.themoviedb.org/3/'

const makeRequest = async (path, searchParams = new URLSearchParams()) => {
  searchParams.append('api_key', process.env.MOVIE_DB_API_KEY)

  const url = new URL(`${path}?${searchParams.toString()}`, BASE_URL)

  const response = await fetch(url.toString())
  const movieData = await response.json()

  return {
    ...movieData,
    results: movieData.results.map(result => ({
      ...result,
      image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`
    }))
  }
}

const discover = async ({ page = 1, year }) => {
  const searchParams = new URLSearchParams([
    ['sort_by', 'popularity.desc'],
    ['include_video', false],
    ['page', page],
    ['year', year]
  ])

  return makeRequest('discover/movie', searchParams)
}

export const movieDbApi = {
  discover
}
