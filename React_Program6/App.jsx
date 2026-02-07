import React, { useState } from 'react'

function App() {
  const [num1,setNum1]=useState("");
  const [num2,setNum2]=useState("");

  const a = Number(num1);
  const b = Number(num2);
  return (
    <div>
      <h2>Real-Time Calculator</h2>

      <input type="number" placeholder='Enter num1' value={num1} onChange={(e) => setNum1(e.target.value)} /> <br /><br />
      <input type="number" placeholder='Enter num2' value={num2} onChange={(e) => setNum2(e.target.value)} />

      <div className="result">
        <h3>Result:</h3>
        <p>Addition: {a+b}</p>
        <p>Subtraction: {a-b}</p>
        <p>Multiplication: {a*b}</p>
        <p>Division: {b === 0 ? "Cannot divide by zero" : a/b}</p>  
      </div>

    </div>
  )
}

export default App