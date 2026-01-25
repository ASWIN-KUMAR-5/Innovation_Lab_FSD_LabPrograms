import React, { useState } from 'react'

function App() {
  const [color,setColor] = useState("white");
  return (
    <div>

      <h2>Color Picker</h2>

      <button className='btn1' onClick={()=>setColor("red")}>Red</button>
      <button className='btn2' onClick={()=>setColor("blue")}>Blue</button>
      <button className='btn3' onClick={()=>setColor("green")}>Green</button>
      <div className='color-box' style={{backgroundColor:color}}></div>
    </div>
  )
}

export default App