const BASE_URL = 'https://api.themoviedb.org/3/'

const makeRequest = (path, searchParams = '') => {
  return fetch(
    `${BASE_URL}${path}?api_key=${process.env.MOVIE_DB_API_KEY}${searchParams}`
  ).then(response => response.json())
}

const genres = async () => {
  return makeRequest('genre/movie/list')
}

const discover = async () => {
  console.log(
    'discover/movie',
    new URLSearchParams('sort_by=popularity.desc&genres=Action')
  )
  return makeRequest(
    'discover/movie',
    '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=Action&with_watch_monetization_types=flatrate'
  )
}

export const movieDbApi = {
  genres,
  discover
}
