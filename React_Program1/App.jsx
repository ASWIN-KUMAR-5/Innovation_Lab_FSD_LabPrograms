import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  const incre = () => {
    setcount(count + 1);
  };

  const decre = () => {
    setcount(count - 1);
  };

  const reset = () => {
    setcount(0);
  };

  return (
    <div>
      <h2>Counter - App</h2>
      <div>{count}</div>

      <button onClick={incre}>Increment</button>
      <button onClick={decre}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
