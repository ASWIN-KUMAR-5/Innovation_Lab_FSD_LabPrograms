import React, { useEffect, useState } from 'react'

function App() {
  const [user,Setuser]=useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response)=>response.json())
      .then((data)=>Setuser(data))
  } ,[])
  return (
    <div>
      <h2>Displaying User Data</h2>
      <div>
        {user.map((Details)=>(
          <div key={user.id}>
            <p>Name: {Details.name}</p>
            <p>User Email: {Details.email}</p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default App