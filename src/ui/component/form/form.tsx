import { useCallback, useState, type FC } from 'react'

type Form = {
  name: string
  email: string
}
// eslint-disable-next-line max-lines-per-function
const Form: FC = () => {
  const [form, setForm] = useState<Form>({
    name: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleForm = useCallback((e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    },
    [form]
  )

  const { name, email } = form
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            type="text"
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            type="email"
            value={email}
          />
        </div>
        <button type="submit">Submit Form</button>
      </form>
      {submitted && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  )
}

export default Form
