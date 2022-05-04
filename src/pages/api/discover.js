import { movieDbApi } from '../../backend/movieDbApi.js'
import { ensureIsArray } from '../../utils/ensureIsArray.js'

const handler = async (req, res) => {
  const {
    query: { genres = [], page, year }
  } = req

  const response = await movieDbApi.discover({
    genres: ensureIsArray(genres),
    page,
    year
  })
  res.status(200).json(response)
}

export default handler
