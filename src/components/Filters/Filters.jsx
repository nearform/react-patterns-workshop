import {useGenresQuery} from "../../hooks/useGenresQuery.js";

export const Filters = () => {
  const genresQuery = useGenresQuery()
  if(genresQuery.data) {
    console.log(genresQuery.data)
  }
  return <div>Filters here...</div>
}
