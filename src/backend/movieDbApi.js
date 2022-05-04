const BASE_URL = 'https://api.themoviedb.org/3/'

const makeRequest = (path, searchParams = []) => {
  const searchParamsAsString = searchParams
    .concat([['api_key', process.env.MOVIE_DB_API_KEY]])
    .map(([k, v]) => `${k}=${v}`)
    .join('&')

  return fetch(`${BASE_URL}${path}?${searchParamsAsString}`).then(response =>
    response.json()
  )
}

const genres = async () => {
  return makeRequest('genre/movie/list')
}

const discover = async ({ page = 1, genres = [] }) => {
  return makeRequest('discover/movie', [
    ['sort_by', 'popularity.desc'],
    ['include_video', false],
    ['page', page],
    ...genres.map(genre => ['with_genres', genre])
  ])
}

export const movieDbApi = {
  genres,
  discover
}
