const BASE_URL = 'https://api.themoviedb.org/3/'

const makeRequest = async (path, searchParams = []) => {
  const searchParamsAsString = searchParams
    .concat([['api_key', process.env.MOVIE_DB_API_KEY]])
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

  const movieData = await fetch(
    `${BASE_URL}${path}?${searchParamsAsString}`
  ).then(response => response.json())

  return {
    ...movieData,
    results: movieData.results.map(result => ({
      ...result,
      image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`
    }))
  }
}

const genres = async () => {
  return makeRequest('genre/movie/list')
}

const discover = async ({ page = 1, year, genres = [] }) => {
  return makeRequest('discover/movie', [
    ['sort_by', 'popularity.desc'],
    ['include_video', false],
    ['page', page],
    ...genres.map(genre => ['with_genres', genre]),
    ['year', year]
  ])
}

export const movieDbApi = {
  genres,
  discover
}
