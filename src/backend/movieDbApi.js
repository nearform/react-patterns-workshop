const BASE_URL = 'https://api.themoviedb.org/3/'

const makeRequest = async (path, searchParams = []) => {
  // TODO: use better way to do this
  const searchParamsAsString = searchParams
    .concat([['api_key', process.env.MOVIE_DB_API_KEY]])
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

  const movieData = await fetch(`${BASE_URL}${path}?${searchParamsAsString}`)
    // TODO: avoid mixing async await with promise native methods
    .then(response => response.json())

  if (movieData.results) {
    return {
      ...movieData,
      results: movieData.results.map(result => ({
        ...result,
        image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`
      }))
    }
  }

  return movieData
}

const discover = async ({ page = 1, year }) => {
  return makeRequest('discover/movie', [
    ['sort_by', 'popularity.desc'],
    ['include_video', false],
    ['page', page],
    ['year', year]
  ])
}

export const movieDbApi = {
  discover
}
