import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitData, setSubmitData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = { name, email, password };
    setSubmitData(formdata);
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {submitData && (
        <div>
          <h2>Submitted Data</h2>
          <p>
            <strong>Name: </strong>
            {submitData.name}
          </p>
          <p>
            <strong>Email: </strong>
            {submitData.email}
          </p>
          <p>
            <strong>Password: </strong>
            {submitData.password}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
