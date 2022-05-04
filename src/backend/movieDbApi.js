
const BASE_URL = 'https://api.themoviedb.org/3/'

const makeRequest = (path) =>
   fetch(`${BASE_URL}/${path}?api_key=${process.env.MOVIE_DB_API_KEY}`).then( response => response.json())

const genres = async () => {
  return makeRequest('genre/movie/list')
}


export const movieDbApi = {
  genres
}
