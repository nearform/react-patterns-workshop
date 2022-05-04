import { movieDbApi } from '../../backend/movieDbApi.js'

const handler = async (req, res) => {
  const {
    query: { genres, page }
  } = req
  const response = await movieDbApi.discover({ genres, page })
  res.status(200).json(response)
}

export default handler
