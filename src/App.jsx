import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [users, setusers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setusers(data))

  }, [])

  const handleadduser = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const newUsers = [...users, data]
        setUsers(newUsers);
        form.reset();
      })

  }

  return (
    <>

      <h1>Users management server</h1>
      <h3>users count:{users.length}</h3>
      <form onSubmit={handleadduser}>
        <input type="text" name='name' id='' /><br />
        <input type="email" name='email' id='' /><br />
        <input type="submit" value="Add user" /><br />


      </form>
      {
        users.map(user => <p key={user.id}> {user.id} : {user.name} : {user.email}  </p>)
      }

    </>
  )
}

export default App
