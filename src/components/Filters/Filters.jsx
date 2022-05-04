import { GenreSelect } from './GenresSelect'
import { useForm, FormProvider } from 'react-hook-form'

export const Filters = () => {
  const formMethods = useForm()

  const { handleSubmit } = useForm()

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <GenreSelect id="genres" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  )
}
