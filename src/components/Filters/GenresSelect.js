import { useGenresQuery } from '../../hooks/useGenresQuery.js'
import { useFormContext } from 'react-hook-form'

export const GenreSelect = ({ id }) => {
  const genresQuery = useGenresQuery()
  const { register } = useFormContext()

  if (!genresQuery.data) {
    return null
  }

  return (
    <div>
      <label htmlFor={id}>Genre</label>
      <select id={id} {...register(id)}>
        {genresQuery.data.genres.map(genre => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  )
}
