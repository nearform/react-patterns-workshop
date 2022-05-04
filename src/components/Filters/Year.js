import { useFormContext } from 'react-hook-form'

export const Year = ({ id }) => {
  const { register } = useFormContext()

  return (
    <div>
      <label htmlFor={id}>Year</label>
      <input type="text" id={id} {...register(id)} />
    </div>
  )
}
