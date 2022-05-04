import { GenreSelect } from './GenresSelect'
import { useForm, FormProvider } from 'react-hook-form'
import { Year } from './Year.js'
import { useFilterQueryParams } from '../../hooks/useFilterQueryParams.js'
import { useEffect } from 'react'

export const Filters = () => {
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
