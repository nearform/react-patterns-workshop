import { useDiscoverQuery } from '../../hooks/useDiscoverQuery.js'
import Image from 'next/image'
import { useFilterQueryParams } from '../../hooks/useFilterQueryParams.js'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { useEffect } from 'react'
import { SidebarLayout } from '../../components/SidebarLayout/SidebarLayout.jsx'
import { useGenresQuery } from '../../hooks/useGenresQuery.js'

const Year = ({ id }) => {
  const { register } = useFormContext()
  return (
    <div>
      <label htmlFor={id}>Year</label>
      <input type="text" id={id} {...register(id)} />
    </div>
  )
}

const GenreSelect = ({ id }) => {
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

const Filters = () => {
  const [filterQueryParams, updateFilterQueryParams] = useFilterQueryParams()

  const formMethods = useForm({
    defaultValues: {
      year: 1985,
      page: filterQueryParams.page,
      genre: filterQueryParams.genre
    }
  })

  const { reset } = formMethods

  // Keep form in sync with query params
  useEffect(() => {
    reset(filterQueryParams)
  }, [filterQueryParams, reset])

  const { handleSubmit } = formMethods

  const onSubmit = values => {
    updateFilterQueryParams({
      genre: values.genre,
      year: values.year,
      page: values.page
    })
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GenreSelect id="genre" />
        <Year id="year" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  )
}

const Step12SSR = () => {
  const [filterQueryParams] = useFilterQueryParams()

  const discoverQuery = useDiscoverQuery({
    genres: filterQueryParams.genre ? [filterQueryParams.genre] : [],
    page: filterQueryParams.page,
    year: filterQueryParams.year
  })
  if (!discoverQuery.data) {
    return null
  }
  return (
    <SidebarLayout leftColumn={<Filters />}>
      {discoverQuery.data.results.map(result => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <Image
            src={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
            alt={result.title}
            width={100}
            height={100}
          />
        </div>
      ))}
    </SidebarLayout>
  )
}

export default Step12SSR
