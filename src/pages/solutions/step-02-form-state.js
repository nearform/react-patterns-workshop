import { useQuery } from 'react-query'
import { SidebarLayout } from '../../components/SidebarLayout/SidebarLayout'
import { useForm } from 'react-hook-form'

const FilterForm = () => {
  const formMethods = useForm()

  const onSubmit = values => {
    console.log(values)
  }

  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="year">Year</label>
        <input type="text" id="year" {...formMethods.register('year')} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const Step2FormState = () => {
  const discoverQuery = useQuery(['discovery'], () =>
    fetch('/api/discover?page=1&year=2020&genre=Action').then(response =>
      response.json()
    )
  )

  if (!discoverQuery.data) {
    return null
  }

  return (
    <SidebarLayout leftColumn={<FilterForm />}>
      <ul>
        {discoverQuery.data.results.map(result => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <img
              src={result.image}
              alt={result.title}
              width={100}
              height={100}
            />
          </li>
        ))}
      </ul>
    </SidebarLayout>
  )
}

export default Step2FormState
