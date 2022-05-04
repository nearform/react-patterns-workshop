import { movieDbApi } from '../../backend/movieDbApi.js'

const handler = async (req, res) => {
  const response = await movieDbApi.discover({ genre: 'Action' })
  res.status(200).json(response)
}

export default handler
