import { movieDbApi } from '../../backend/movieDbApi'
import { ensureIsArray } from '../../utils/ensureIsArray'

const handler = async (req, res) => {
  const {
    query: { genres = [], page, year }
  } = req

  const response = await movieDbApi.discover({
    genres: ensureIsArray(genres),
    page,
    year
  })

  const withFriendlyImages = {
    ...response,
    results: response.results.map(result => ({
      ...result,
      image: `https://image.tmdb.org/t/p/w500/${result.poster_path}`
    }))
  }
  res.status(200).json(withFriendlyImages)
}

export default handler
