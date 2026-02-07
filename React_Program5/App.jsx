import React, { useEffect, useState } from 'react'

function App() {
  const [greeting,setGreeting]=useState("");
  useEffect(() => {
    const hours = new Date().getHours().toString().padStart(2, '0');
    const minutes = new Date().getMinutes().toString().padStart(2,'0');
    const seconds = new Date().getSeconds().toString().padStart(2,'0');

    if(hours<12){
      setGreeting(`Good Morning ${hours}:${minutes}:${seconds}`);
    }else if(hours>=12 && hours<17){
      setGreeting(`Good Afternoon ${hours}:${minutes}:${seconds}`);
    }else if(hours>=17 && hours<20){
      setGreeting(`Good Evening ${hours}:${minutes}:${seconds}`);
    }else {
      setGreeting(`Good Night ${hours}:${minutes}:${seconds}`);
    }
  })
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  )
}

export default App