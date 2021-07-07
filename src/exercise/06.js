// Basic Forms
// http://localhost:3000/isolated/exercise/06.js


import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef();
  const [error, setError] = React.useState()

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input ref={inputRef} id="usernameInput" type="text" onChange={handleChange} />
      </div>
      <button disabled={Boolean(error)} type="submit">Submit</button>
      <div role="alert" style={{color: 'red'}}>{error}</div>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
