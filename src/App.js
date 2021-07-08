// next 2>32>12

import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Users></Users>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([])
  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then (res => res.json())
    .then (data => setUsers(data))
  }, [])
  
  return (
    <div>
      <h3>Dynamic user data{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          users.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App;