import {movieDbApi} from "../../backend/movieDbApi.js";

const handler = async (req, res) => {
  const response= await  movieDbApi.genres()
  res.status(200).json(response)
}

export default handler
