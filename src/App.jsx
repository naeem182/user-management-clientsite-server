import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setusers(data))

  }, [])

  return (
    <>

      <h1>Users management server</h1>
      <h3>users count:{users.length}</h3>

    </>
  )
}

export default App
